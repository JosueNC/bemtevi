import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Restaurante from 'App/Models/Restaurante';
import RestauranteValidator from 'App/Validators/RestauranteValidator';

export default class RestaurantesController {

    public async create({request, response}: HttpContextContract) {

        try {
            const {nome, logradouro, numero, cep, bairro, cidade} = request.only(['nome', 'logradouro', 'numero', 'cep', 'bairro', 'cidade'])

            try {
                await request.validate(RestauranteValidator);
            }catch (error){
                const message = error.messages.errors.map(error => error.message)
                return response.status(400).json({message})
            }


            const restaurante = await Restaurante.create({
                nome,
                logradouro,
                numero,
                cep,
                bairro,
                cidade
            })

            return response.status(200).json({message: 'Restaurante criado com sucesso!', data: restaurante, success: true})
        } catch (error) {
            // console.log(error)
            return response.status(500).json({message: 'Houve um erro, tente novamente mais tarde!'})
        }
        


    }
}
