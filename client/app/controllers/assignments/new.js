import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Controller.extend({
  question: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  answer: "",
  store: service(),
  questions: A([]),
  successMessage: "",
  actions: {
    createAssignment: function() {
      let _this = this;
      let assignmentObject = {
        title: _this.get("model.title"),
        user_id: Cookies.get("userId"),
        questions: _this.get("questions")
      }

      let assignment = this.store.createRecord('assignment', assignmentObject);
      assignment.save().then(function(data) {
        console.log(data);
        _this.set("successMessage", "Assignment Saved Successfully");
      }, function(error) {
        console.log(error);
      });
    },
    createQuestion: function() {
      let questionObj = {
        body: this.get("question"),
        options: [this.get("option1"), this.get("option2"), this.get("option3"), this.get("option4")],
        answer: this.get("answer")
      }
      
      this.get('questions').pushObject(questionObj);
      this.set("question", "");
      this.set("option1", "")
      this.set("option2", "")
      this.set("option3", "")
      this.set("option4", "")
      this.set("answer", "")
    }
  }
});
