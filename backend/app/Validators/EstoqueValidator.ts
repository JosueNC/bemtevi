import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EstoqueValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    nome: schema.string({trim: true}),
    quantidade: schema.number(),
  })

}
