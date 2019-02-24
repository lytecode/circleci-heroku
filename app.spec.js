const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./app");
let should = chai.should();

chai.use(chaiHttp);

describe("#GET /", () => {
  it("should return a status of 200", done => {
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
