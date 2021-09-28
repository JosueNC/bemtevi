import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export default class RestauranteValidator extends BaseValidator {
  constructor (protected ctx: HttpContextContract) {
	  super()
  }

  public schema = schema.create({
	nome: schema.string({trim: true}, [
		rules.maxLength(50),
		rules.minLength(3),
		rules.blackList(['Admin', 'Moderator']),
		rules.unique({table: 'restaurantes', column: 'nome'})
	]),
	logradouro: schema.string({trim: true}),
	numero: schema.string({trim: true}),
	cep: schema.string({trim: true}, [
		rules.maxLength(8),
		rules.minLength(8)
	]),
	bairro: schema.string({trim: true}),
	cidade: schema.string({trim: true})
	
  })  

}
