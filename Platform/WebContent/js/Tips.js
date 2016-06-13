/**
 * 
 */

var Tips = function(text, location){
	this.text = text;
	this.location = location;
	this.triggered = false;
}

Tips.prototype.trigger = function(){
	var output = [];
	var j = 0;
	for (var i = 0; i < this.text.length; i++){
		j += 40;
		if(j > this.text.length){
			j = this.text.length;
		}
		else{
			while(this.text[j] != " "){
				j += 1;
				if(this.text[j] = null){
					break;
				}
				//To avoid having the program freeze in the while loop if something goes wrong.
				if(j > 500){
					break;
				}
			}
		}
		output.push(this.text.substring(i, j));
		i = j;
		
	}
	updateTipsTracker(output);
	showTips();
	this.triggered = true;
}

Tips.prototype.checkTips = function(){
	if(!this.triggered && !menu){
		var distance = new THREE.Vector3();
		distance.subVectors(player.mesh.position, this.location);
		if(distance.length() < 2){
			this.trigger();
		}
	}
}

Tips.prototype.reset = function(){
	this.triggered = false;
}