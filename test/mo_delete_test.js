const Student = require("../app/student");
const assert = require("assert");

describe("Delete test", () => {
  let deleter;
  beforeEach((done) => {
    deleter = new Student({ name: "delete" });
    deleter.save().then(() => done());
  });
  it("delete test for deleter", (done) => {
    // it is not a good idea it might give few error deleter.remove()
    Student.findByIdAndDelete(deleter._id)
      .then(() => {
        // if use use {} then we need to return elseif we dont need to return we directly gets it
        return Student.findOne({ name: "deleter" });
      })
      .then((student) => {
        assert(student === null);
        done();
      });
  });
});
