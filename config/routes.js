
// all url are prefixed with '/api'

export default [
  // e.i. { method: 'post', url: '/user', controllerAction: (controllers) => controllers.UserController.create },

  { method: 'post', url: '/user', controllerAction: ({ UserController }) => UserController.create },
  { method: 'get', url: '/user/:id', controllerAction: ({ UserController }) => UserController.findOne }
]
