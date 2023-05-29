const Sequelize = require('sequelize');
 
const config = {
    // appConfig : {
        port :  process.env.PORT,
        host :  process.env.HOST
    // }
}

const dbConnection = async() => {

    try {

        await new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
            host: process.env.HOST,
            dialect: 'postgres', 
        });

        console.log('Online database');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error starting database')
        
    }

}

module.exports = {
    dbConnection,
    config
}