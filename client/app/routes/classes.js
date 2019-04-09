import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        name: "Class A",
        classCode: "YWEF1K",
        students: [
          {
            id: 1,
            email: "s1@gmail.com",
            username: "s1"
          },
          {
            id: 2,
            email: "s2@gmail.com",
            username: "s2"
          },
          {
            id: 3,
            email: "s3@gmail.com",
            username: "s3"
          }
        ]
      },
      {
        id: 2,
        name: "Class B",
        classCode: "BUEF1K",
        students: [
          {
            id: 1,
            email: "s11@gmail.com",
            username: "s11"
          },
          {
            id: 2,
            email: "s22@gmail.com",
            username: "s22"
          },
          {
            id: 3,
            email: "s33@gmail.com",
            username: "s33"
          }
        ]
      }, 
      {
        id: 3,
        name: "Class C",
        classCode: "MWEF5K",
        students: [
          {
            id: 1,
            email: "s12@gmail.com",
            username: "s12"
          },
          {
            id: 2,
            email: "s22@gmail.com",
            username: "s22"
          },
          {
            id: 3,
            email: "s33@gmail.com",
            username: "s33"
          }
        ]
      }
    ]
  }
});
