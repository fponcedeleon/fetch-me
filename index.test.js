const fetch = require("node-fetch");
const server = require("./server");

const createdServer = server.listen(0);
const URL = `http://127.0.0.1:${createdServer.address().port}`;

afterAll(() => createdServer.close());

describe("ensure server response", () => {
  it("should fail with custom HTTP error", async () => {
    const resp = await fetch(`${URL}/fetch-me`);
    expect(resp.status).toBe(499);
  });
});
