
// all url are prefixed with '/api/${database}'

export default [
  { method: 'post', url: '/user', handler: 'UserController.create' },
  { method: 'get', url: '/user/:id', handler: 'UserController.findOne' }
]
