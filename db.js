const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, DECIMAL } = Sequelize
//environmental var. for database
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_schools_testing_db');

//first model
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

//second model
const Student = conn.define('student', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  gpa: {
    type: DECIMAL,
    allowNull: false
  },
  school: {
    type: UUID,
    allowNull: false
  }
})

const syncAndSeed = async() => {
  await conn.sync({ force: true });
  const names = ['MIT', 'Harvard', 'UCLA', 'CCNY', 'Brown', 'Apex Tech'];
  await Promise.all(names.map(name => School.create({ name })));
};

module.exports = {
  syncAndSeed,
  models: {
    School,
    Student
  }
}
