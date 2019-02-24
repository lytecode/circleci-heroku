const chai = require("chai");
const chaiHttp = require("chai-http");
const { app, sum } = require("./app");
let should = chai.should();

chai.use(chaiHttp);

describe("Test for circle ci", () => {
  it("should return it", done => {
    chai
      .request(app)
      .get("/")
      .end((req, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");

        done();
      });
  });
});
