import { expect } from "chai";
import Calculator from "../src/calculator";

describe("Test Calculator Class", () => {
  let cal: Calculator;
  before(() => {
    console.log("Before");
    cal = new Calculator();
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  it("Should return SUM", () => {
    // Act
    const result = cal.add(2, 3);
    expect(result).to.equal(5);
  });
  it("Should return SUB", () => {
    // Act
    const result = cal.subsctract(5, 3);
    expect(result).to.equal(2);
  });
  it("Should return MULT", () => {
    // Act
    const result = cal.multply(3, 3);
    expect(result).to.equal(9);
  });
  it("Should return DIVI", () => {
    // Act
    const result = cal.divide(10, 2);
    expect(result).to.equal(5);
  });
  it("Should throw an Error while DIVI by Zero", () => {
    expect(() => cal.divide(10, 0)).to.throw("Can not divide by Zero.");
  });

  after(() => {
    console.log("After");
  });

  afterEach(() => {
    console.log("After Each");
  });
});
