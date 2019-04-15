import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  body: attr('string'),
  assignment: DS.belongsTo('assignment'),
  options: attr(),
  answer: attr('number'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
