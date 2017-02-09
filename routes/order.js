var router = require('express').Router();
var sequelize = require('../db.js');
var Order = sequelize.import('../models/order');
router.post('/', function(req,res){
    //when we post to api user, it will want a user object in the body
    var name = req.body.order.name;
    var address = req.body.order.address;
    var city = req.body.order.city;
    var telephone = req.body.order.telephone;
    var areaCode = req.body.order.areaCode;
    var details = req.body.order.details;
    
    //Match the model we create above
    //Sequelize - take the user model and go out to the db and create this
    Order.create({
        name: name,
        address: address,
        city: city,
        telephone: telephone,
        areaCode: areaCode,
        details: details
    }).then(
        //Sequelize is going to return the object it created from db
        function createSuccess(order){
            //successful get this:
            res.json({
                order: order,
                message: 'create'
            });
        },
        function createError(err){
            res.send(500, err.message);
        }
    );
});
module.exports = router;