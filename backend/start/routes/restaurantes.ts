import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/create', 'RestaurantesController.create')
}).prefix('/restaurantes')

