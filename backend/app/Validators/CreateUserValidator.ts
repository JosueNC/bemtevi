import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export default class CreateUserValidator extends BaseValidator {
  constructor (protected ctx: HttpContextContract) {
	  super()
  }

	public schema = schema.create({
		name: schema.string({trim: true}),
		email: schema.string({trim: true}),
		password: schema.string({trim: true}),
		role: schema.string({trim: true}),
	})
}
