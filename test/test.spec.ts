import { assert } from "chai";
import { addition } from "@/index";

describe("Calculator Tests", () => {
  it("should return 5 when 2 is added to 3", () => {
    const result = addition(2, 3);
    assert.equal(result, 5);
  });
});

describe("Calc Tests", () => {
  it("Hello Test", async () => {
    console.log("Hello test");
    console.log(addition(10, 30));
  });
});
