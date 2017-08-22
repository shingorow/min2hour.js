(function(global) {

	var Min2Hour = (function () {
  	function Min2Hour(minutes) {
      this.minutes = minutes;
      this.minPerHour = 60;
    }
    
    Min2Hour.prototype.parse = function() {
      var hour = this.minutes / this.minPerHour;
      var min = this.minutes % this.minPerHour;
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
