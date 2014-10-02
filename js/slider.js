var sliderInt = 1;
var sliderNext = 2;

$(document).ready(function(){
	$("#slider > img#1").fadeIn(350);
	startSlider();
});

function startSlider() {
	count =$("#slider > img").size();

	loop = setInterval(function(){

		if(sliderNext > count){
			sliderNext=1;
			sliderInt=1;
		};

			$("#slider > img").fadeOut(350);
			$("#slider > img#" + sliderNext).fadeIn(350);

			sliderInt = sliderNext;
			sliderNext = sliderNext + 1;

	}, 3000);
};

function showSlide(id){
	stopLoop();
	if(id > count){
			id=1;
		}
	else if (id < 1) {
		id=count;
	}

			$("#slider > img").fadeOut(350);
			$("#slider > img#" + id).fadeIn(350);

			sliderInt = id;
			sliderNext = id + 1;
	startSlider();
};

function prev(){
	var newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	var newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop(){
	window.clearInterval(loop);
}

$("#slider > img").hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}
	)