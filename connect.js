import Sequelize from 'sequelize'

const sequelize = new Sequelize ('postgres://postgres:12345@localhost:5432/modulo3')  

export default sequelize  