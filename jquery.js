$( document ).ready(function() {

$(".right-top-box span:last-child").click(function(){
    $(".create-task-section").show()
})


$(".create-task-section i:first-child, button").click(function(){
    $(".create-task-section").hide()
})

$(".task-urgent-and-important-section span:first-child").click(function(){
    $("#urgent-type").show()
});


// $("#editPostform button").click(function(){
//      $("#editPostform").hide()
//  });

$(".pen-bg").click(function(){
    console.log("event is clicked");
    $(".edit-section").show()
});



});






 // <div id="completed-type">Completed</div>
                            // <div id="urgent-type">Urgent</div>
                            // <div id="important-type">Important</div>
                            // <div id="later-type">Later</div>
                            // <div id="study-type">To study</div>