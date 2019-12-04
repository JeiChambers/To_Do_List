// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on 'X' to delete To Do Task.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Placing Click Listener on Input Field
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new To Do text from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new lu and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
});