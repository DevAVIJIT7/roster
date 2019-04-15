import Service, {inject as service} from '@ember/service';

export default Service.extend({
  currentUser: null,
  store: service(),

  init() {
    this._super(...arguments);
    let userId = Cookies.get('userId');
    let accessToken = Cookies.get('accessToken');
    if(!!userId) {
      var user = this.get('store').find('user', userId)
      this.set('currentUser', user);
    }
  },
  login(user) {
    this.set("currentUser", user);
    Cookies.set('userId', user.id)
    Cookies.set("accessToken", JSON.stringify(user.tokens[user.tokens.length -1].token));
  },
  logout() {
    this.set("currentUser", null);
    Cookies.remove('userId')
    Cookies.set("accessToken", null)
  },
});