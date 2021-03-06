
module.exports = function(sequelize, DataTypes) {

    var Florist = sequelize.define("Florist", {
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,

            validate: {
                len: [1]
            }
        },

        email: {
            type: DataTypes.STRING,
            isUnique :true,
            allowNull:false,
            
            validate:{
                isEmail : true
            }
        },

        phone: {
            type: DataTypes.STRING,
            isNumeric: true,
            allowNull: false,
            notEmpty: true


        },

        description: {
            type: DataTypes.TEXT
        },

        price: {
            type: DataTypes.INTEGER
        }
    });
    return Florist;
};


