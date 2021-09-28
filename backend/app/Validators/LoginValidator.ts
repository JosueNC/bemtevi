import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export default class LoginValidator extends BaseValidator {
  constructor (protected ctx: HttpContextContract) {
    super()
  }
  
  public schema = schema.create({
    email: schema.string({trim: true}),
    password: schema.string({trim: true}),
  })

}
