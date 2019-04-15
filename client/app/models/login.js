import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  email: attr('string'),
  password: attr('string'),
  tokens: attr(),
  role: attr("string"),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
