function edit_color_label(value) {

    $("#welcome_message").text(value);
    return value;

}

function edit_speed_label (value){
  $("#speed_message").text(value);
}


function slider_range(change_val) {
  $("#slider_label").text(change_val);
  livelyPropertyListener("speed", change_val);
}


$(document).ready(function(){
    let intro_message = "Static Blocks Blue"; //project name
    $("#welcome_message").text(intro_message);
    let slider = document.getElementById("slider_range")
    let slider_val = String(slider.value);
    $("#slider_label").text(slider_val);
    
 
});


function livelyPropertyListener(name, val)
{
    if(name =="mouse_active")
    {
      window.localStorage.setItem("mouse_active", val); //bool
    }
    else if(name =="color_1") 
    {
     // in hex format, e.g. #C0C0C0
      window.localStorage.setItem("color_selected", val);
      edit_color_label(val);
    }
    else if(name =="speed") 
    {
      window.localStorage.setItem("speed_selected", val);
      //edit_speed_label(val);
    }
    
}