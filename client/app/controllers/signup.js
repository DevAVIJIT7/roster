import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({
  role: '',
  roleIsStudent: equal('role', 'Student'),
  session: service(),
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

      var user = _this.store.createRecord('user', userObject);

      var onFail = function(user) {
        console.log(user)
      };

      user.save().then((user) => {
        this.session.login(user)
        if(user.role === "Student") {
          this.transitionToRoute("assignments");
        } else if (user.role === "Teacher") {
          this.transitionToRoute("classes");
        }
      }, onFail);
    },
  }
});
