const request = require('supertest')
const app = require('../../server.js')

describe("Server", () => {
  describe("Endpts1", () => {
    describe("post POST", () => {
      it("create a new post", async () => {
        const response = await request(app)
          .post("/")
          .send({ userId: 5 })
          .set("user_id", 1)
          .set("Content-Type", "application/json");
        expect(response.statusCode).toEqual(201)
        expect(response.body.userId).toEqual(5)
        expect(response.body).toHaveProperty('id')
      });
      it("does not creates a new post", async () => {
        const response = await request(app)
          .post("/")
          .send({ userId: 100 })
          .set("user_id", 1)
          .set("Content-Type", "application/json");
        expect(response.statusCode).toEqual(400)
        expect(response.body.userId).toEqual(5)
        expect(response.body).toHaveProperty('id')
      });
    });
  });
});