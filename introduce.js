"use strict"
var skill = 0;

function onload(){
	var _circle = document.getElementsByClassName("skillCircle");
	var _length = _circle.length;
	for(var i = 0;i < _length;i++){
		var _color = _circle[i].getAttributeNode("data-skill-color").value;
		// var _outColor = "rgb(" +  (255 - parseInt(_color.substring(1,3),16)) + "," + (255 - parseInt(_color.substring(3,5),16)) + "," + (255 - parseInt(_color.substring(5,7),16)) + ")";
		var _outColor = _color;
		_circle[i].getElementsByClassName("outCircle")[0].style.backgroundColor = _color;
		var _percent = _circle[i].getAttributeNode("data-skill-percent").value;
		for(var n = 0;n<_percent*10;n++){
			var _sector = document.createElement("div");
			_sector.setAttribute("class","sector");
			// _sector.style.transform = "rotate(" + (3.6*n+90) + "deg) skewX(80deg)";
			_sector.style.backgroundColor = _outColor;
			_circle[i].getElementsByClassName("skillPercent")[0].appendChild(_sector);
		}
	}
	alert(document.getElementsByTagName("body")[0].offsetWidth + "px");
	alert(document.getElementsByTagName("header")[0].offsetWidth);
}

window.onscroll = function(){
	var _scrollTop = document.body.scrollTop;
	var _skillScrollTop = document.getElementsByClassName("skill")[0].getBoundingClientRect().top;
	// l(_skillScrollTop);
	// l(document.documentElement.clientHeight);
	if(document.documentElement.clientHeight*2/3 <= _skillScrollTop <= 0 && skill == 0){
		// l("y");
		var _circle = document.getElementsByClassName("skillCircle");
		var _length = _circle.length;
		for(var i = 0;i < _length;i++){
			var _percent = _circle[i].getAttributeNode("data-skill-percent").value;
			for(var n = _percent*10 - 1;n>=0;n--){
				_circle[i].getElementsByClassName("sector")[n].style.transform = "rotate(" + (3.6*n+90) + "deg) skewX(80deg)";
				_circle[i].getElementsByClassName("sector")[n].style.webkitTransform = "rotate(" + (3.6*n+90) + "deg) skewX(80deg)";
				_circle[i].getElementsByClassName("sector")[n].style.Otransform = "rotate(" + (3.6*n+90) + "deg) skewX(80deg)";	
				
				// l(3.6*n+90);
			}
			skill = 1;
		}
	}
}


function l(e){
	console.log(e);
}