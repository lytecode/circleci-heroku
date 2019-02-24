const chai = require("chai");
const chaiHttp = require("chai-http");
const { sum } = require("./app");
let should = chai.should();

chai.use(chaiHttp);

// describe("#GET /", () => {
//   it("should return a status of 200", done => {
//     chai
//       .request(app)
//       .get("/")
//       .end((req, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("object");

//         done();
//       });
//   });
// });

describe("sum(2,2)", () => {
  it("should return 4", done => {
    let ss = sum(2, 2);
    ss.should.equal(4);
    done();
  });
});
