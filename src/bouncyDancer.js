// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var BouncyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.apply(this,[top, left, timeBetweenSteps]);
  var $img = $('<img src="http://4.bp.blogspot.com/-hZvvG6vxPNw/U-rWivimEBI/AAAAAAAAJlg/VBSIOBKD_HE/s1600/Tony%2Bthe%2BTiger.jpg" class="bouncyDancer"></img>')
  $img.appendTo(this.$node);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;


BouncyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.animate({top : this.top+20+'px'}, 'slow');
  this.$node.animate({top : this.top-20+'px'}, 'slow');
};

BouncyDancer.prototype.lineUp = function(){
  this.setPosition(null, 180);
}

var makeBouncyDancer = function(top, left, timeBetweenSteps){
  var bouncyDancer = new BouncyDancer(top, left, timeBetweenSteps);
  return bouncyDancer;
};