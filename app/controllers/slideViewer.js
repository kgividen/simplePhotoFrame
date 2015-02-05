var args = arguments[0] || {};


var gallerypicker = require('titutorial.gallerypicker');
//gallerypicker.openGallery({
//    cancelButtonTitle : "Cancel",
//    doneButtonTitle : "Okay",
//    title : "Custom Gallery",
//    errorMessage: "Limit reached",
//    limit : 10,
//    success : function(e) {
//        var imgArray = e.filePath.split(",");
//        showSlideShow(imgArray);
//    },
//    error : function(e) {
//        alert("error " + JSON.stringify(e));
//    },
//    cancel : function(e) {
//        alert("cancel " + JSON.stringify(e));
//    }
//});


var speed = 1000;
var i = -1;
var showing = true;

function showSlideShow(imagesArray) {
    if (i < imagesArray.length-1) {
        i++;
    } else {
        i = 0;
    }
    if(osname == "android") {
        Ti.API.debug("imagesArray[i]: " + imagesArray[i]);
        if(showing) {
            //todo Detect size of screen and pick that as the image size.
            $.imageView.image = gallerypicker.decodeBitmapResource(imagesArray[i], 100, 100);
        }
    }

    if (showing){
        setTimeout(function() {
            showSlideShow(imagesArray);
        }, speed);
    }
}

//showSlideShow(["/storage/emulated/0/Pictures/2.jpg","/storage/emulated/0/Pictures/1.jpg"]);
var imgArray = Ti.App.Properties.getObject("imgArray");
if(imgArray) {
    showSlideShow(imgArray);
} else {
    alert("Choose some photos");
}





//**************EVENT LISTENERS ****************

$.slideViewer.addEventListener('click', function(e) {
    showing = false;
    $.destroy();
    $.imageView = null;
    $.slideViewer.close();
});

if (osname === "android") {
    $.slideViewer.addEventListener('open', function () {
        $.slideViewer.activity.actionBar.hide();
    });

}