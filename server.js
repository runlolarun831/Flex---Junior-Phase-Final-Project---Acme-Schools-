const express = require('express');
const app = express();
//const db = require('./db');
const path = require('path');

app.use(express.json()); //middleware

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));


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
    const schoolNames = [ 'MIT', 'Harvard', 'UCLA', 'CCNY', 'Brown', 'Apex Tech' ];

    const [ mit, harvard, ucla, ccny, brown, apexTech ] = await Promise.all(schoolNames.map(_name => School.create({ name: _name} )));

    const studentNames = [{ firstName: 'Isaac', lastName: 'Kerns', email: 'isaackerns@gmail.com', gpa: 3.75, schoolId: harvard.id}, { firstName: 'Maeve', lastName: 'Smith', email: 'msmith@gmail.com', gpa: 3.99, schoolId: harvard.id} ];
    await Promise.all(studentNames.map(name => Student.create({ firstName: name.firstName, lastName: name.lastName, email: name.email, gpa: name.gpa, school: name.school })));
  };

  syncAndSeed();

  module.exports = {
    syncAndSeed,
    models: {
      School,
      Student
    }
  }

  app.get('/api/schools', (req, res, next) => {
    School.findAll()
    .then(schools => res.send(schools))
    .catch(next)
    });
  app.post('/api/schools',(req, res, next) => {
    School.create(req.body)
    .then(school => res.send(school)) //this created data going back to thunk
    .catch(next)
    });


    app.get('/api/students', (req, res, next) => {
      Student.findAll()
      .then(students => res.send(students))
      .catch(next)
      });
    app.post('/api/students', (req, res, next) => {
      Student.create(req.body)
      .then(student => res.send(student)) //this created data going back to thunk
      .catch(next)
      });
//environmental var. for port
const port = process.env.PORT || 3000;

// verify that server is working
app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;//you need this
