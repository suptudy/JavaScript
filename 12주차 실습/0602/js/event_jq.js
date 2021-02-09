$(document).ready(function(){

  let innerFunction = function (e) {
    // let msg = "발생원: " + e.target.nodeName + "/" + e.target.id + "<br>";
    // msg = msg + "종류: " + e.type;
    // $(this).html(msg);
    e.stopPropagation();
    let msg = "screen: " + e.screenX + "/" + e.screenY + "<br />";
    msg = msg + "page: " + e.pageX + "/" + e.pageY + "<br />";
    msg = msg + "client: " + e.clientX + "/" + e.clientY + "<br />";
    msg = msg + "offset: " + e.offsetX + "/" + e.offsetY;
    $(this).html(msg);
  };

 // $("#inner").click(innerFunction);

  $('#event-add').on("click", function() {
    $('#inner').on("click", innerFunction);
  });

  $("#event-rm").on("click", function() {
     $('#inner').off("click");
  });

  $('#outer').on('click', function(){
    window.alert("Hello Outer");
  });

  $('#body').on('click', function() {
    window.alert("Hello Body");
  });

  $('#link').on("click", function(e){
    window.alert("link event 발생 1");
  });

  $('#link').on("click", function(e){
    window.alert("link event 발생 2");
  });

})



