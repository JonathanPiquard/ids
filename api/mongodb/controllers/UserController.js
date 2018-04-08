import User from '../models/User';


const UserController = {

  create: (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.resolve(err));
  },

  find: (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.resolve(err));
  },

  findById: (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.resolve(err));
  },

  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(err => res.resolve(err));
  },

  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => res.send(user.id))
        .catch(err => res.resolve(err));
  }

};

export default UserController
