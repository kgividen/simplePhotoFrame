var args = arguments[0] || {};

var gallerypicker = require('titutorial.gallerypicker');
gallerypicker.openGallery({
    cancelButtonTitle : "Cancel",
    doneButtonTitle : "Okay",
    title : "Custom Gallery",
    errorMessage: "Limit reached",
    limit : 10,
    success : function(e) {
//        var imgArray = e.filePath.split(",");
        Ti.App.Properties.setObject("imgArray", e.filePath.split(","));

    },
    error : function(e) {
        alert("error " + JSON.stringify(e));
    },
    cancel : function(e) {
        alert("cancel " + JSON.stringify(e));
    }
});
