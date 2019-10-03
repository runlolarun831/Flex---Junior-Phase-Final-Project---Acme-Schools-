const Sequelize = require('sequelize');
const {UUUID, UUIDV4, STRING } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_schools_db');

const School = conn.define('school', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    allowUnique: true // check in docs
  }
  //imageURL: //check docs
});

