import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    className: "",
    searchTerm: "",
    createClass: function() {
      console.log(this.get('className'));
    }
  }
});
