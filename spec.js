const { expect } = require('chai');
const db = require('./db');
const { School } = db.models;
describe('My Application', () => {
  beforeEach(() => db.syncAndSeed());
  describe('DataLayer', () => {
    describe('School model', () => {
      it('there are 6 schools', async() => {
        const schools = await School.findAll();
        expect(schools.length).to.equal(6);
      })
    });
  });
});
