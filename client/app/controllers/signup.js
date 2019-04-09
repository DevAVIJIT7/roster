import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';

export default Controller.extend({
  role: '',
  roleIsStudent: equal('role', 'Student'),
  actions: {
    createUser: function() {
      let _this = this;
      let userObject = {
        email: _this.get('model.email'),
        password: _this.get('model.password'),
        username: _this.get('model.username'),
        firstName: _this.get('model.firstName'),
        lastName: _this.get('model.lastName'),
        role: _this.get('role'),
        classCode: _this.get('model.classCode')
      }
      let user = this.store.createRecord('user', userObject);
      user.save().then(function() {
        _this.notify.success('created new task');
      });
    },
  }
});
