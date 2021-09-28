/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import { validator } from '@ioc:Adonis/Core/Validator'

/**
 * VALIDAR SE UMA STRING ESTÁ DENTRO DE UMA BLACKLIST. EX. NÃO PODE SER ADMIN OU MODERATOR
 */
validator.rule('blackList', (value:string, [notInArray], {pointer, arrayExpressionPointer, errorReporter}) => {
    if(typeof value !== 'string' || !Array.isArray(notInArray)) {
        return
    }

    const matches = notInArray.filter((item:string) => item.trim().toLowerCase() === value.trim().toLowerCase())

    if(matches.length){
        errorReporter.report(pointer, 'blackList', 'Esse valor é restrito', arrayExpressionPointer)
    }

})