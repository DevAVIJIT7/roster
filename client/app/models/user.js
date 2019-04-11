import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  username: attr('string'),
  password: attr('string'),
  classCode: attr('string'),
  role: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  tokens: attr()
});
