'use strict';
module.exports = (sequelize, DataTypes) => {
	const Token = sequelize.define(
		'Token',
		{
			uuid: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4
			}
		},
		{}
	);
	Token.associate = function (models){
		// associations can be defined here
		Token.belongsTo(models.User, {
			onDelete: 'CASADE',
			foreignKey: 'user_uuid'
		});
	};
	return Token;
};
