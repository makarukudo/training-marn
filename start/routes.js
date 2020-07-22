'use strict'
const Route = use('Route');
const Next = use('Adonis/Addons/Next');
const handler = Next.getRequestHandler();

Route.group(() => {
  Route.resource('users', 'UserController')
}).prefix('api')

Route.get('*', ({ request, response }) =>
  new Promise((resolve, reject) => {
    handler(request.request, response.response, promise => {
      promise.then(resolve).catch(reject);
    });
  })
)
