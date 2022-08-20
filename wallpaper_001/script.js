function edit_color_label(value) {

    $("#welcome_message").text(value);
    return value;

}



$(document).ready(function(){
    let intro_message = "Static Blocks Blue"; //project name
    $("#welcome_message").text(intro_message);
    
 
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
    else if(name =="btnUpdate") 
    {
      window.localStorage.setItem("updated", val);
      let msg = "Updated";
      $("#welcome_message").text(msg);
    }
    else {
      window.localStorage.setItem("color_selected", null);
    }
}