export default class BaseValidator {
    public messages = {
      required: '{{field}} é obrigatorio.', 
      minLength: '{{field}} deve ter {{options.minLength}} caracteres',
      maxLength: '{{field}} deve ter {{options.maxLength}} caracteres',
      unique: '{{field}} já existente, por favor selecionar outro.'
    }
}