import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/create', 'UsersController.create').middleware(['verifyToken', 'isAdmin'])
    Route.post('/login', 'UsersController.login')
    Route.get('/list', 'UsersController.index').middleware(['verifyToken', 'isAdmin'])
}).prefix('/users')

