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
     $( "#modalbg" ).remove();
    $('.globalContainer').removeClass("productglobal");
    $(".quoteformparentcont").removeClass("productcontainer");
    $("#quoteformcont").removeClass("initialproductcont");
    $('.custom-file-container__image-preview').css("background-image", "url('data:image/png;base64,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')");
 });

}

export function stepTwo (){
$(document).ready(function() {
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
    $(".footer-buttons").hide();
     $( "#modalbg" ).remove();
     $('.globalContainer').addClass("share");
     $('.globalContainer').removeClass("productglobal");
     $("#quoteformcont").removeClass("initialproductcont");
    $(".quoteformparentcont").removeClass("productcontainer");
});
}
