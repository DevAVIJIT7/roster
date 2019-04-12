import Controller from '@ember/controller';
import { A } from '@ember/array';

var removeClassName = function(event) {
  if (event.target.tagName == "SPAN") {
    event.target.parentNode.className = "list-group-item class-item";
  } else {
    event.target.className = "list-group-item class-item";
  }
};
var addClassName = function(event) {
  if (event.target.tagName == "SPAN") {
    event.target.parentNode.className = "list-group-item class-item active";
  } else {
    event.target.className = "list-group-item class-item active";
  }
};

export default Controller.extend({
  className: "",
  searchTerm: "",
  selectedClassCode: "",
  selectedStudents: A([]),
  activeClassName: "",
  filteredStudents: function() {
    return this.get('model.students')
  }.property('model.students'),

  actions: {
    createClass: function() {
      let _this = this;
      let classObject = {
        name: _this.get("className"),
        code: Math.random().toString(36).slice(2).toUpperCase()
      }
      let classRecord = this.store.createRecord('class', classObject);
      classRecord.save().then(function(data) {
        _this.set("className", "");
      }, function(error) {});
    },
    selectClass: function(code) {
      let students = this.get('model.students');
      if (this.get("selectedClassCode").length > 0) {
        this.set("selectedClassCode", "");
        removeClassName(event);
        this.set("filteredStudents", this.get('model.students'));
      } else {
        this.set("selectedClassCode", code);
        addClassName(event);
        let newList = students.filter((student) => student.classCode.toLowerCase().indexOf(this.get("selectedClassCode").toLowerCase()) > -1);
        this.set("filteredStudents", newList); 
      }
    },
    selectStudent: function(studentId) {
      console.log(this.selectedStudents)
      if (this.selectedStudents.includes(studentId)) {
        this.selectedStudents.removeObject(studentId)
      } else {
        this.selectedStudents.pushObject(studentId);
      }
    },
    searchStudents: function() {
      let students = this.get('model.students');
      if (this.get("searchTerm") == "") {
        this.set("filteredStudents", this.get('model.students'));
      } else {
        let newList = students.filter((student) => student.email.toLowerCase().indexOf(this.get("searchTerm").toLowerCase()) > -1);
        this.set("filteredStudents", newList); 
      }
    },
    saveToClass: function() {
      var _this = this;
      if(this.selectedStudents.length > 0) {
        this.selectedStudents.forEach((studentId) => {
          this.store.findRecord('user', studentId).then(function(user) {
            user.set('classCode', _this.get("selectedClassCode"));
            user.save();
          });
        })
      }
    }
  }
});
