const Student = require("../app/student");
const assert = require("assert");

describe("Update Tests", () => {
  let updater;
  beforeEach((done) => {
    updater = new Student({ name: "Updater" });
    updater.save().then(() => done());
  });
  it("Set n save test ", () => {
    updater.set("name", "UpUpdater");
    updater
      .save()
      .then(() => {
        return Student.find({});
      })
      .then((students) => {
        assert(student[0].name !== "Updater");
        assert(student[0].name === "UpUpdater");
      });
  });
});
