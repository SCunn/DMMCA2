//  ------------ navbar menu mobile -----------
$(document).ready(function(){
	$("#flip").click(function(){
		$("#navMenuDrop").slideToggle(1100);
	});
});

$(document).ready(function(){
	$(document).scroll(function(){
		$("#navMenuDrop").fadeOut(2500);
		
	});
});

// ------------- Sound Effects click ----------
var klIck = $("#klick")[0];
$("#myTopNav a, #flip, #myLink").click(function() {
		klIck.play();
	});

// ----------- Image Gallery ----------------
var imageCount = 1;
var total = 10;

function photo(x) {
    var image = document.getElementById('image');
    imageCount = imageCount + x;
    if (imageCount > total) {
        imageCount = 1;
    }
    if (imageCount < 1) {
        imageCount = total;
    }
    image.src = "imagegallery/image" + imageCount + ".png";
    clearInterval(time);                                // clear interval stops the set interval.
    time = window.setInterval(function photoA() {       // givig the value of time the samfunction below starts the loop 
        var image = document.getElementById('image');
        imageCount = imageCount + 1;
        if (imageCount > total) {
            imageCount = 1;
        }
        if (imageCount < 1) {
            imageCount = total;
        }
        image.src = "imagegallery/image" + imageCount + ".png";
    }, 3000);
}

var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
    var image = document.getElementById('image');
    imageCount = imageCount + 1;
    if (imageCount > total) {
        imageCount = 1;
    }
    if (imageCount < 1) {
        imageCount = total;
    }
    image.src = "imagegallery/image" + imageCount + ".png";
}, 3000);



// -------------- Tabbed Menu ----------------
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();

