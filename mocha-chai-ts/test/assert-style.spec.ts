// DOC: https://www.chaijs.com/

import { assert, expect, should } from "chai";

describe("Assert style", () => {
  it("EXPECT assertion style", () => {
    // Arrange
    const name: string = "Zinzo";
    const age: number = 30;
    const objData: Object = { name: "Zinzo", age: 40 };
    const arrData: Array<number> = [1, 2, 3, 4];
    const boolData: boolean = true;

    expect(name).to.be.ok;
    expect(name).to.be.equal("Zinzo");
    expect(name).to.be.a("string");

    expect(age).to.be.ok;
    expect(age).to.be.equal(30);
    expect(age).to.be.a("number");

    expect(objData).to.be.ok;
    expect(objData).to.be.a("object");
    expect(objData).to.be.property("name").equal("Zinzo");
    expect(objData).to.be.property("age").equal(40);

    expect(arrData).to.be.ok;
    expect(arrData).to.be.a("array");
    expect(arrData).to.be.lengthOf(4);
    expect(arrData).to.be.lengthOf(4).that.include(2);
    expect(arrData).to.not.have.lengthOf(5).that.does.not.include(5);

    expect(boolData).to.be.ok;
    expect(boolData).to.be.a("boolean");
    expect(boolData).to.be.true;
  });

  it("SHOULD assertion style", () => {
    should();
    // Arrange
    const name: string = "Zinzo";
    const age: number = 30;
    const objData: Object = { name: "Zinzo", age: 40 };
    const arrData: Array<number> = [1, 2, 3, 4];
    const boolData: boolean = true;

    name.should.be.ok;
    name.should.be.equal("Zinzo");
    name.should.be.a("string");

    age.should.be.ok;
    age.should.be.equal(30);
    age.should.be.a("number");

    objData.should.be.ok;
    objData.should.be.a("object");
    objData.should.be.property("name").equal("Zinzo");
    objData.should.be.property("age").equal(40);

    arrData.should.be.ok;
    arrData.should.be.a("array");
    arrData.should.be.lengthOf(4);
    arrData.should.be.lengthOf(4).that.include(2);
    arrData.should.not.have.lengthOf(5).that.does.not.include(5);

    boolData.should.be.ok;
    boolData.should.be.a("boolean");
    boolData.should.be.true;
  });

  it("ASSERT assertion style", () => {
    // Arrange
    const name: string = "Zinzo";
    const age: number = 30;
    const objData: Object = { name: "Zinzo", age: 40 };
    const arrData: Array<number> = [1, 2, 3, 4];
    const boolData: boolean = true;

    assert.isOk(name);
    assert.equal(name, "Zinzo");
    assert.typeOf(name, "string");

    assert.isOk(age);
    assert.equal(age, 30);
    assert.typeOf(age, "number");

    assert.isOk(objData);
    assert.typeOf(objData, "object");
    assert.deepEqual(objData, { name: "Zinzo", age: 40 });

    assert.isOk(arrData);
    assert.typeOf(arrData, "array");
    assert.deepEqual(arrData, [1, 2, 3, 4]);
    assert.include(arrData, 3);

    assert.isOk(boolData);
    assert.typeOf(boolData, "boolean");
    assert.equal(boolData, true);
  });
});
