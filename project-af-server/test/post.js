const chai = require("chai");
const chaihttp = require("chai-http");
const server = require("../server");
const routetopic = require("../routes/topic");
const routesupervisor = require("../routes/supervisor");

chai.should();
chai.use(chaihttp);

describe("GET Api OF TOPIC REGISTRATION ", () => {
  //Test Get
  describe("GET All TOPICS", () => {
    it("It should return all list topics", (done) => {
      chai
        .request(routetopic)
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
describe("GET Api OF SUPERVISOR ", () => {
  //Test Get
  describe("GET All SUPERVISOR", () => {
    it("It should return all list supervisors", (done) => {
      chai
        .request(routesupervisor)
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
