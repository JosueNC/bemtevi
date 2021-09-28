import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class NotAllowUser {
  public async handle ({request, response}: HttpContextContract, next: () => Promise<void>) {

    const {user} = request.params()

    if(!user) return response.status(403).json({message: 'Você não é autorizado'})

    if(user.prioridade >= 2) return response.status(403).json({message: 'Você não é autorizado'})
    
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
