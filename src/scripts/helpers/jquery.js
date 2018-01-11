//MOVE STEP BUTTONS INTO A DIFFERENT CONTAINER
import $ from "jquery";
import mousewheel from "jquery-mousewheel";
export function detatchButtons (){
$(document).ready(function() {
    $(".footer-buttons").detach().appendTo(".custom-file-container");       
    $(".progtrckr").detach().appendTo(".sidebar");
 });
}

export function stepOne (){
$(document).ready(function() {
      $("#next-button").prop('disabled', false);
     $( "#modalbg" ).remove();
    $('.globalContainer').removeClass("productglobal");
    $(".quoteformparentcont").removeClass("productcontainer");
    $("#quoteformcont").removeClass("initialproductcont");
    $('.custom-file-container__image-preview').css("background-image", "url('data:image/png;base64,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");
 });

}

export function stepTwo (){
$(document).ready(function() {
      $("#next-button").prop('disabled', false);
     $( "#modalbg" ).remove();
    $('.globalContainer').removeClass("productglobal");
    $(".quoteformparentcont").removeClass("productcontainer");
    $("#quoteformcont").removeClass("initialproductcont");
 });

}

export function stepThree (){

$('.products').on('mousewheel', function(event) {
    this.scrollLeft -= (event.deltaY);
});
$(document).ready(function() {
   $("#next-button").prop('disabled', true);
 $('.globalContainer').addClass("productglobal");
    $("#quoteformcont").addClass("initialproductcont");
        $(".quoteformparentcont").addClass("productcontainer");
        $(".products>div").each(function(index) {
      $(this).delay(200*index).fadeTo(1000, 1);
 });
});
}

export function stepFive(){
$(document).ready(function() {
      $("#next-button").prop('disabled', false);
    $(".footer-buttons").hide();
     $( "#modalbg" ).remove();
     $('.globalContainer').addClass("share");
     $('.globalContainer').removeClass("productglobal");
     $("#quoteformcont").removeClass("initialproductcont");
    $(".quoteformparentcont").removeClass("productcontainer");
});
}
