/*global $*/
console.log("hello");
var imgUrl = ["http://1funny.com/wp-content/uploads/2011/08/baby-elephant.jpg", "https://pixel.nymag.com/imgs/daily/selectall/2018/03/05/05-patrick.w710.h473.jpg", "http://www.howtochoosealaptop.com/wp-content/uploads/2017/02/meme-roll-safe.jpg"];
var imgDesc = ["elephant", "dank meme", "terry"];
var input = [$('input').val];
var imgHtml = '<img src="' + input + '">';

for (var i = 0; i < imgUrl.length; i++) {
    var img = $('body').append($("<img>").attr("src", imgUrl[i]));
    var imgDes = $('body').append($("<p>").text(imgDesc[i]));
}
$("button").click(function() {
    fartsnozzle();
});

function fartsnozzle() {
    imgUrl.push($("#img").val());
    imgDesc.push($("#desc").val());
    $("div").append($("<img>").attr("src", imgUrl[imgUrl.length - 1]));
    $("div").append("<h4>" + imgDesc[imgDesc.length - 1] + "</h4>");
}
