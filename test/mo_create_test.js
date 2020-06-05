const Student = require("../app/student");
const assert = require("assert");

describe("Create records", () => {
  it("create a user in DB", () => {
    //assert(false) to make our test false and true for true
    //assert(true);

    const aman = new Student({
      name: "aman",
    });
    aman
      .save()
      .then(() => {
        //if data is inserted in our DB then
        //isNew becomes false but we want
        //assert alue to be true
        //so we ! it if it is true means data
        //is not inserted properly
        //then assert is gonna be false else it is gonna be true
        assert(!aman.isNew);
      })
      .catch((err) => console.log("error while creating", err));
  });
});
