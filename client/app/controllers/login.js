import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { inject } from '@ember/controller'; 

const renderTemplate = function(_this, res) {
  if(res.role === "Student") {
    _this.transitionToRoute("assignments");
  } else if (res.role === "Teacher") {
    _this.transitionToRoute("classes");
  }
}

export default Controller.extend({
  email: "",
  password: "",
  errors: null,
  session: service(),
  applicationController: inject('application'),
  init() {
    if(this.session.currentUser !== null) {
      this.session.currentUser.then((user) => {
        if(user.data) {
          this.applicationController.set("showNavBar", true);
          renderTemplate(this, user.data);
        }
      })
    }
  },
  actions: {
    login: function() {
      let _this = this;
      let loginObject = {
        email: _this.get('email'),
        password: _this.get('password')
      }

      var loginUser = _this.store.createRecord('login', loginObject);

      loginUser.save().then((res) => {
        this.session.login(res)
        this.applicationController.set("showNavBar", true);
        if(res.role === "Student") {
          this.transitionToRoute("assignments");
        } else if (res.role === "Teacher") {
          this.transitionToRoute("classes");
        }
      }, (error) => {
        this.set("errors", error.errors);
      });
    }
  }
});
