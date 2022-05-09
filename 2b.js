//★ jQuery ★

//ensures script will only run after HTML page 
//has loaded to the browser window
$(document).ready(function () {
    //selecting all input elements 
    $("input").keydown(function (event) {
        // 13 refers to the ENTER keyboard key
        if (event.which == 13 && $("input").val() != "") {
            //declares new variable, setting a value
            var userInput = $("input").val();
            //input txt disappears from text field on submit
            $(this).val("");

            //appends li, userinput & i:s into ul
            //(= checkmark & skull appear next to new items)
            $("ul").append("<li>" + userInput + "<span class='check'><i class='fa-solid fa-check'></i></span>" + "<span class='delete'><i class='fa-solid fa-skull'></i></span>");
        }
    });
});

//  BUTTONS BELOW
//adds strike & opacity change through an individual item;
//user can undo and redo the "done" click as many times as they'd like
$("ul").on("click", "li", function () {
    $(this).toggleClass("checksout");
    //sets item as checked 
    localStorage.setItem(this, "cheksout");
});

//removes item 
$(document).on("click", ".delete", function (event) {
    $(this).parent().fadeOut(700, function () {
        $(this).remove();
        //removes item from localstorage
        localStorage.removeItem(this);
    });
    event.stopPropagation();
});

//sends an alert message with information 
//via the "i" (info) button
$(document).ready(function () {
    $("#what").click(function () {
        //sweetalert styling
        swal({
            title: "info box",
            text: "You can mark an item as complete by clicking the checkmark button, or delete it entirely by clicking the skull."
        });
    });
});

//moon button = clears all items from list
function clearAll() {
    if (confirm("By proceeding, your list will clear of all items. Do you still wish to proceed?")) {
        $("#clear").attr("href", "query.php?ACTION=delete&ID='1'")
        $("li").empty();
    } else {
        return;
    }
}

//toggle thingy
$("#togglebtn").click(function () {
    $("p").toggle('slow');
});