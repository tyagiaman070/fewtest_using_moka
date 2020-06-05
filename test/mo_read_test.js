const Student = require("../app/student");
const assert = require("assert");

describe("read tests", () => {
  let read;
  beforeEach((done) => {
    read = new Student({ name: "read" });
    read
      .save()
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it("read user from database", (done) => {
    Student.find({ name: "read" }).then((students) => {
      //_id is a BSON value
      assert(read._id.toString() === students[0]._id.toString());
      done();
    });
  });
});
