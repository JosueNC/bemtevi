import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.post('/login', 'SessionsController.create')
}).prefix('sessions')