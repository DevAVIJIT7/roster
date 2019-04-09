import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    className: "",
    searchTerm: "",
    createClass: function() {
      let _this = this;
      let classObject = {
        name: _this.get("className"),
        classCode: Math.random().toString(36).slice(2).toUpperCase()
      }
      let classRecord = this.store.createRecord('user', classObject);
      console.log(classRecord);
    }
  }
});
