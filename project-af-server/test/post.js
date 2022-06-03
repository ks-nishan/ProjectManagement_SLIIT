const chai = require("chai");
const chaihttp = require("chai-http");
const server = require("../server");
const route = require("../routes/topic");

chai.should();
chai.use(chaihttp);

describe("GET Api", () => {
  //Test Get
  describe("GET All TOPICS", () => {
    it("It should return all list topics", (done) => {
      chai
        .request(route)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("status");
          response.body.should.have.property("data");

          done();
        });
    });
  });
});
