var Sequelize = require('sequelize');

var sequelize = new Sequelize('pizzaapp', 'postgres', 'Tigersrock21', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('connected to pizzaapp postgres db');
    },
    function(err){
        console.log(err);
    }
);
var Order = sequelize.import('./models/order');

module.exports = sequelize;