import Message from '../models/Message';
import User from '../models/User';


const MessageController = {

  create: (req, res) => {
    User.findById(req.body.author)
        .then(user => {
          Message.create(req.body)
                 .then(message => {
                   user.messages.push(message);

                   user.save()
                       .then(user => res.json(message))
                       .cath(err => {
                         Message.findByIdAndRemove(message.id).exec();
                         res.resolve(err)
                       });
                 })
                 .catch(err => res.resolve(err));
        })
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
           .then(message => {
              User.findById(message.author)
                  .then(author => {
                    author.messages = author.messages.filter(msg => msg !== message.id);

                    author.save()
                          .then(user => res.send(message.id))
                          .cath(err => {
                            message.save().exec();
                            res.resolve(err);
                          });
                  })
                  .catch(err => res.resolve(err));
           })
           .catch(err => res.resolve(err));
  }

};

export default MessageController
