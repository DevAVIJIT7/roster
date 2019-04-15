import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  session: service(),
  showNavBar: false,
  currentUser: null,
  isTeacher: computed("currentUser", function() {
    if(this.get("currentUser") !== null) {
      return this.get("currentUser").role === "Teacher";
    }
  }),
  init() {
    if(this.session.currentUser !== null) {
      this.session.currentUser.then((user) => {
        if(user.data) {
          this.set("currentUser", user.data)
          this.set("showNavBar", true);
        }
      })
    }
  },
  actions: {
		logout: function() {
      this.session.logout();
      this.set("currentUser", null);
      this.set("showNavBar", false)
			this.transitionToRoute("login");
		}
	}
});
