import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

import { verify } from 'jsonwebtoken'

export default class JwtVerifyToken {
  public async handle ({request, response}: HttpContextContract, next: () => Promise<void>) {
    
    const {token} = request.headers()

    if(!token) return response.status(404).json({message: 'Você não está autenticado!'})

    verify(String(token), Env.get('JWT_SECRET'), async (err, user) => {
      if(err) return response.status(403).json({message: 'Token não é valido!'})

      request.updateParams({user})
      // code for middleware goes here. ABOVE THE NEXT CALL
      await next()
    })
    
    
  }
}
