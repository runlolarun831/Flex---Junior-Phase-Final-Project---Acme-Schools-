const { expect } = require('chai');
const db = require('./db');
const { School, Student } = db.models;

describe('My Application', () => {

  beforeEach(() => db.syncAndSeed());

  describe('DataLayer', () => {

    describe('Student model', () => {
      it('there is 1 student', async() => {
        const students = await Student.findAll();
        expect(students.length).to.equal(1);
      });
    })

  });
});
