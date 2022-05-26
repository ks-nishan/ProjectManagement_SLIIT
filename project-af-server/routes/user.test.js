const router = require("./router");

test("Properly add two numbers", () => {
  expect(router(1, 2)).toBe(3);
});
