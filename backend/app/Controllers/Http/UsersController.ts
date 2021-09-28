import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Hash from '@ioc:Adonis/Core/Hash'
import Logger from '@ioc:Adonis/Core/Logger'

import Env from '@ioc:Adonis/Core/Env'
import LoginValidator from 'App/Validators/LoginValidator'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

import {sign} from 'jsonwebtoken'
import Role from 'App/Models/Role'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class UsersController {

  public async create({ request, response }: HttpContextContract) {
    const {name, email, password, role: roleName} = request.only(['name', 'email', 'password', 'role'])

    try {
      await request.validate(CreateUserValidator);
    }catch (error){
      const message = error.messages.errors.map(error => error.message).join('\n')
      return response.status(400).json({message})
    }

    const user = await Database.from('users').where('name', name).orWhere('email', email).first()

    if(user) return response.status(409).json({message: 'Usuário já cadastrado com email ou nome', success: false})

    const roles = await Role.findBy('role', roleName)

    if(!roles) return response.status(404).json({message: 'Não foi localizado role especificada', success: false})

    const role = roles?.$attributes.id
    
    const userCreated = await User.create({
      name,
      email,
      password, 
      id_role: role
    })

    return response.status(201).json({message: 'Usuario criado com sucesso!', data: userCreated, success: true})
  }

  public async index () {
    const user = await User.query().select('name').where('id', 33).first()
    console.log(user)
    return await User.all()
  }

  public async login ({request, response}: HttpContextContract) {
    const {email, password} = request.only(['email', 'password'])
    
    try {
        await request.validate(LoginValidator);
    }catch (error){
        const message = error.messages.errors.map(error => error.message).join('\n')
        return response.status(400).json({message})
    }

    const user = await User.findBy('email', email) as User
    const roles = await user.related('role').query()

    const role = roles[0].$attributes as Role

    if(!user){
      return response.status(403).json({message: 'Usuário não localizado', success: false})
    }

    if(!role){
      return response.status(500).json({message: 'Algo deu errado. Tente novamente mais tarde', success: false})
    }
    
    const { prioridade, role: roleNome } = role
    // const passMatch = await Hash.verify(String(user?.password), password)
  
    if (user?.password !== password) {
      return response.status(403).json({message: 'Usuário não localizado', success: false})
    }
    
    const {password:pass, rememberMeToken, id_role: IdRole, ...userToReturn} = user.$attributes

    const userToReturnWithRole = {...userToReturn, prioridade, role: roleNome}

    const secret = (Env.get('JWT_SECRET') as string) || 'Temporaria';
    
    // GERANDO TOKEN
    const token = sign(
      {
        ...userToReturnWithRole,
      },
      secret,
      {
        expiresIn: "30d", // 30D
        // expiresIn: 10, // 30D
      }
    );

    return response.status(200).json({message: 'Usuario logado com sucesso', data: token, success: true})

  }

}
