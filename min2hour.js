(function(global) {

	var Min2Hour = (function () {
  	function Min2Hour(munites) {
      this.munites = munites;
      this.minPerHour = 60;
    }
    
    Min2Hour.prototype.parse = function() {
      var hour = this.munites / this.minPerHour;
      var min = this.munites % this.minPerHour;
      hour = Math.floor(hour);
      
      return {
        hour: hour,
        min: min
      }
    }
    
    return Min2Hour;
  }());
  
  global.Min2Hour = Min2Hour;
}(this));
