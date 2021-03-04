function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
 var codeToCopy = $(element).children("p").text();
 $temp.val(codeToCopy).select();
  document.execCommand("copy");
  $temp.remove();
 $("button").text("COPY CODE");
var button = $(element).children("button");
button.text(button.data("text-swap"));
};

$(document).ready(function(){
    $('.coming-soon').click(function () {
        $('.pop-up').css('display', 'block');
    });
     $('.close-btn').click(function () {
        $('.pop-up').css('display', 'none');
    });
});

$(document).ready(function(){
    $('.humburger-icon').click(function () {
        $(".hamburger-menu").show();
        $('main').css('position', 'fixed');
    });
    $('.close-hamburger').click(function () {
        $(".hamburger-menu").hide();
        $('main').css('position', 'unset');
    });
});

