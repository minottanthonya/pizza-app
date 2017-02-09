module.exports = function(sequelize, DataTypes) {
	return sequelize.define('order', {
		name: DataTypes.STRING,
		address: DataTypes.STRING,
		city: DataTypes.STRING,
		telephone: DataTypes.STRING,
		areaCode: DataTypes.STRING,
		details: DataTypes.STRING
	});
};