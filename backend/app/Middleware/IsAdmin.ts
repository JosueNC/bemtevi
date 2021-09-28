import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsAdmin {
  public async handle ({request, response}: HttpContextContract, next: () => Promise<void>) {

    const {user} = request.params()

    if(!user) return response.status(404).json({message: 'Você não é autorizado'})

    if(user.role.toLowerCase() !== 'admin') return response.status(403).json({message: 'Você não é autorizado'})

    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
