var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    res.status(200).send(user);
    console.log(user)
  });
};


exports.read_a_user = function(req, res) {
    let userId = req.params.userId;

    User.findById(userId).exec ((err,user) =>{
        if(err) return res.status(500).send({message:`Error making the request: ${err}` })
        if(!user) return res.status(404).send({message: `Username does not exist`})
        res.status(200).send({user})
    });
  };

exports.create_a_user = function(req, res) {
    console.log('POST /users')
    console.log(req.body)
 
    let users = new User()
     users.name =req.body.name
     users.email= req.body.age
     users.password = req.body.email
    

 
     users.save((err,users) =>{
         if(err) res.status(500).send({message: `Error to save the database ${err}`})
 
         res.status(200).send({users: users})
  });
};

exports.update_a_user = function(req, res) {
    let userId = req.params.userId
    let update = req.body

    User.findByIdAndUpdate(userId, update,(err, userUpdate) => {
        if(err) res.status(500).send({message: `Error updating the user: ${err}`})

        res.status(200).send({ users: userUpdate})
  });
};


exports.delete_a_user = function(req, res) {


    let userId = req.params.userId
    let delet = req.body

        User.findByIdAndRemove(userId, delet, (err,usersdelet) =>{
            if(err) res.status(500).send({message: `Error deleting the user: ${err}`})
            res.status(200).send({users:usersdelet})
  });
};