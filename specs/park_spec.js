var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park Test", function(){

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 1);
    dinosaur3 = new Dinosaur("Triceratops", 5);
    park = new Park();
  });

  it("enclosure starts empty", function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it("can add dinosaur", function() {
    park.add(dinosaur1);
    assert.strictEqual(park.enclosure[0], dinosaur1);
  })

  it("can remove dinosaurs by type", function() {
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.removeByType("Tyrannosaurus");
    assert.strictEqual(park.enclosure[0], dinosaur2);
  })

  it("can find dinosaurs who have more than 2 offspring a year", function(){
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    assert.equal(park.findFertileDinosaurs().length, 2);
  })

});
