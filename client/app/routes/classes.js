import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      classes: this.store.findAll('class'),
      students: this.store.query('user', {
        filter: {
          role: 'Student'
        }
      })
    });
  },
  setupController(model, transition){
    this._super(...arguments);
    Ember.set(model,'classes', model.model.classes);
    Ember.set(model,'students', model.model.students);
  }
});
