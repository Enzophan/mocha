import { expect } from "chai";
import User from "../src/callApi";
import nock from "nock";

const baseUrl = "https://jsonplaceholder.typicode.com";

describe("API Testing", () => {
  it("Should make a GET request Users from API", async () => {
    const user = new User();
    const res = await user.getUsers();

    expect(res.status).to.equal(200);
    expect(res.data).to.lengthOf(10);
  });

  it("Should make a GET request a user from API", async () => {
    const user = new User();
    const mockedUserRes = { id: 1, name: "Zinzo Phan" };
    nock(baseUrl).get("/users/1").reply(200, mockedUserRes);
    const res = await user.getUser(1);

    expect(res.status).to.equal(200);
    expect(res.data.id).to.equal(1);
  });

  it("Should make a POST request a user from API", async () => {
    const user = new User();
    const userPayload = {
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    };
    const expectedUserResponse = { ...userPayload, id: 22 };
    nock(baseUrl).post("/users", userPayload).reply(201, expectedUserResponse);
    const res = await user.createUser(userPayload);
    // console.log("res.data ", res.data);
    expect(res.status).to.equal(201);
    expect(res.data.id).to.equal(22);
  });

  after(() => {
    nock.cleanAll();
  });
});
