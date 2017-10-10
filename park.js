var Park = function(){
  this.enclosure = [];
}

Park.prototype.add = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeByType = function (type) {
  for (dino of this.enclosure) {
    if (dino.type === type) {
      var index = this.enclosure.indexOf(dino);
      this.enclosure.splice(index, 1);
    }
  }
};

Park.prototype.findFertileDinosaurs = function(){
  var dinosaurs = [];
    for (dino of this.enclosure) {
      if (dino.offspringNumber > 2) {
        dinosaurs.push(dino);
      }
    }
    return dinosaurs;
};

module.exports = Park;
