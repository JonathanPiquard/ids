
export default [
  { method: 'post', url: '/user', handler: 'UserController.create' },
  { method: 'get', url: '/users', handler: 'UserController.find' },
  { method: 'get', url: '/user/:id', handler: 'UserController.findById' },
  { method: 'put', url: '/user/:id', handler: 'UserController.update' },
  { method: 'delete', url: '/user/:id', handler: 'UserController.delete' },

  { method: 'post', url: '/message', handler: 'MessageController.create' },
  { method: 'get', url: '/messages', handler: 'MessageController.find' },
  { method: 'get', url: '/message/:id', handler: 'MessageController.findById' },
  { method: 'put', url: '/message/:id', handler: 'MessageController.update' },
  { method: 'delete', url: '/message/:id', handler: 'MessageController.delete' }
]
