const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");


const { expect } = chai;
chai.use(chaiHttp);


describe("Server!", () => {
  
  it("welcomes user to the api", function(done) {
    this.timeout(5000);
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equals("Welcom to testing api");
      });
      setTimeout(done,5000);
  });

  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equals("Welcom to testing api");
        done();
      });
  });


  it("adds 2 numbers", done => {
    chai
      .request(app)
      .post("/add")
      .send({ num1: 5, num2: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(10);
        done();
      });
  });
});


