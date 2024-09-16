import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

class User {
  async getUsers() {
    return await axios.get(`${baseUrl}/users`);
  }

  async getUser(id: number) {
    return await axios.get(`${baseUrl}/users/${id}`);
  }

  async createUser(userPayload: object) {
    return await axios.post(`${baseUrl}/users`, userPayload);
  }
}

export default User;
