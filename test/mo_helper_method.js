const mongoose = require("mongoose");

//ES6 Promises
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect("mongodb://localhost/mongotube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .once("open", () => {
      //console.log("connected")
      done();
    })
    .on("error", (error) => {
      console.log("your error is ", error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.students.drop(() => {
    console.log("drop success");
    done();
  });
});
