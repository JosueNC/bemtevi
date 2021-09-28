import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/create', 'EstoquesController.create')
    Route.get('/list', 'EstoquesController.indexAll')
    Route.post('/update', 'EstoquesController.update')
    Route.delete('/delete/:id', 'EstoquesController.delete')
}).prefix('/estoque').middleware(['verifyToken', 'notAllowUser'])

