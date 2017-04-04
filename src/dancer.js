// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>')
  //this.$node = $('<img src="http://i2.mirror.co.uk/incoming/article6379795.ece/ALTERNATES/s615b/Minion.jpg" class="blinkyDancer">');
  this.step();
  this.setPosition(this.top, this.left);

};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};

Dancer.prototype.neighbors = function() {
  var distances = [];
  var top = this.top;
  var left = this.left;
  window.dancers.forEach(function(key, index) {
    distances[index] = {};
    distances[index]['nodes'] = key;
    distances[index]['dist'] = calculateDistance(key.top, key.left, top, left);
  });
  distances.sort();

  var numberOfNearest = 4;

  for (var i = 0; i < numberOfNearest; i++) {
    console.log("I'm here");
    
    distances[i]['nodes'].setPosition(this.top, null);
  }

  function calculateDistance(top1, left1, top2, left2) {
    return Math.sqrt(Math.pow(top1 - top2, 2) + Math.pow(left1 - left2, 2));
  }
};