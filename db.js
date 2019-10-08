const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, DECIMAL } = Sequelize;

// environmental var. for database
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_schools_testing_db');

// first model
const School = conn.define('school', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false
  }
  //imageURL: //check docs
});

// second model
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
  }
})

// connection/relationship btwn. models
Student.belongsTo(School);
School.hasMany(Student);

const syncAndSeed = async() => {
  await conn.sync({ force: true });
  const schoolNames = [ 'mit', 'harvard', 'ucla', 'ccny', 'brown', 'apex tech' ];

  const [ mit, harvard, ucla, ccny, brown, apexTech ] = await Promise.all(schoolNames.map(_name => School.create({ name: _name} )));

  const studentNames = [{ firstName: 'Isaac', lastName: 'Kerns', email: 'isaackerns@gmail.com', gpa: 3.75, schoolId: harvard.id}, { firstName: 'Maeve', lastName: 'Smith', email: 'msmith@gmail.com', gpa: 3.99, schoolId: harvard.id} ];
  await Promise.all(studentNames.map(name => Student.create({ firstName: name.firstName, lastName: name.lastName, email: name.email, gpa: name.gpa, school: name.school })));
};

//syncAndSeed();

module.exports = {
  syncAndSeed,
  models: {
    School,
    Student
  }
}
