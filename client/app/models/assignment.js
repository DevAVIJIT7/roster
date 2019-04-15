import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr('string'),
  user_id: attr('string'),
  questions: attr(),
  students: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
