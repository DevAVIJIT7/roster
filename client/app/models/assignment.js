import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr('string'),
  user: DS.belongsTo('user'),
  questions: DS.hasMany('question'),
  students: DS.hasMany('user'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
