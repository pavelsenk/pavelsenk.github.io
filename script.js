
/*
$("button").click(()=>{
    let inputValue = $("input").val();
    $("ul").append(`<li>${inputValue}</li>`)
      
})
$("ul").click(()=>{
    $("li").css("text-decoration", "line-through")
})*/

/*$("li").off().on("click", function () {
        $(this).css("text-decoration", "line-through")
        })*/
$("button").on("click", function(){
    let inputValue = $("input").val();
    if (inputValue === "") {
        alert("Place your to buy Item")
        return false;
    }
    $(".todo").append(`<div class="todoItem"><span>${inputValue}</span>
    <i id="ok" class="far fa-check-square"></i>
    <i id="delete" class="far fa-trash-alt"></i></div>`);
    $("input").val("");

    $("div.todoItem").on("click", "#ok", function(){
        $(this).parent().fadeOut(function(){
            $(this).appendTo(".done");
            $(this).fadeIn(); 
        })
        $(this).remove("#ok");
    })
    $("div.todoItem").on("click", "#delete", function(){
        $(this).parent().fadeOut(function(){
            $(this).remove();
        })
    })
    
   /* $("#ok").on("click", function() {
        $("#todoItem").appendTo(".done");
    })*/
  
})


