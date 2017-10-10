var assert = require("assert");
var Dinosaur = require("../dinosaur");

describe("Dinosaur Test", function(){

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 2);
  });

  it("has a type", function(){
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  })

  it("has a number of offspring per year", function(){
    assert.strictEqual(dinosaur.offspringNumber, 2);
  })
});
