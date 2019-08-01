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


