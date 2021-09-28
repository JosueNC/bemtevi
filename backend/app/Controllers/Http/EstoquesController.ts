import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estoque from 'App/Models/Estoque';
import EstoqueValidator from 'App/Validators/EstoqueValidator';

export default class EstoquesController {

    public async create({ request, response }: HttpContextContract) {
        const {nome, quantidade} = request.only(['nome', 'quantidade'])
        
        try {
          await request.validate(EstoqueValidator);
        }catch (error){
          const message = error.messages.errors.map(error => error.message).join('\n')
          return response.status(400).json({message})
        }

        const ingrediente = await Estoque.findBy('nome', nome);

        if(ingrediente) return response.status(409).json({message: 'Ingrediente já cadastrado!', data: ingrediente, success: false})
        
        const user = await Estoque.create({
            nome,
            quantidade,
        })
    
        return response.status(201).json({message: 'Ingrediente criado com sucesso!', data: user, success: true})
    }

    public async indexAll({ response }: HttpContextContract) {

      const ingredientes = await Estoque.all()

      return response.status(201).json({data: ingredientes, success: true})
    }

    public async update({ request, response }: HttpContextContract) {
        const {nome, quantidade} = request.only(['nome', 'quantidade'])
    
        try {
          await request.validate(EstoqueValidator);
        }catch (error){
          const message = error.messages.errors.map(error => error.message).join('\n')
          return response.status(400).json({message})
        }

        const ingrediente = await Estoque.findBy('nome', nome);

        if(!ingrediente) return response.status(409).json({message: 'Ingrediente não cadastrado!', success: false})
        
        ingrediente.quantidade = quantidade

        await ingrediente.save()

        return response.status(201).json({message: 'Ingrediente atualizado com sucesso!', data: ingrediente, success: true})
    }

    public async delete({ request, response }: HttpContextContract) {
        const {id} = request.params()
        
        const ingrediente = await Estoque.findBy('id', id);

        if(!ingrediente) return response.status(409).json({message: 'Ingrediente não cadastrado!', success: false})
        
        await ingrediente.delete()

        return response.status(201).json({message: 'Ingrediente deletado com sucesso!', success: true})
    }

}
