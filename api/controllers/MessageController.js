
import Message from '../models/Message';
import User from '../models/User';


const MessageController = {

  create: (req, res) => {
    Message.create(req.body)
           .then(message => res.json(message))
           .catch(err => res.resolve(err));
  },

  find: (req, res) => {
    Message.find()
           .then(messages => res.json(messages))
           .catch(err => res.resolve(err));
  },

  findById: (req, res) => {
    Message.findById(req.params.id)
           .then(message => res.json(message))
           .catch(err => res.resolve(err));
  },

  // simple update without author update
  update: (req, res) => {
    //const { author, ...body } = req.body;
    req.body.author = null

    Message.findByIdAndUpdate(req.params.id, req.body)
           .then(message => res.json(message))
           .catch(err => res.resolve(err));
  },

  delete: (req, res) => {
    Message.findByIdAndRemove(req.params.id)
           .then(message => res.status(200).send(message.id))
           .catch(err => res.resolve(err));
  }

};

export default MessageController
