import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
    
  public async create({ request, auth }: HttpContextContract) { 
      const { email, password } = request.all()
  
      const token = await auth.attempt(email, password)
  
      return token
    } 
}
