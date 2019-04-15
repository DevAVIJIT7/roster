import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  session: service(),
  showNavBar: false,
  actions: {
		logout: function() {
      this.session.logout();
      this.set("showNavBar", false)
			this.transitionToRoute("login");
		}
	}
});
