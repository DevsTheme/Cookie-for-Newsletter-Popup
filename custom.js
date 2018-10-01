/*--------------------------
  Newsletter 
---------------------------- */


$(document).ready(function(){
  
  checkCookie();
  $('.popup_off').click(function(){
    setCookie("newsletter", "newsletter", {% if settings.newsletter_cookie_day%} {{ settings.newsletter_cookie_day}} {% else %} 1 {% endif %});

    $('.popup_wrapper').hide();


  });
  
  
  $('.newsletter__submit').click(function(){
    setCookie("newsletter", "newsletter", 365);
    $('.popup_wrapper').hide();
  });
  
  
});




// });

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  //d.setTime(d.getTime() + (exdays*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var newsletter = getCookie("newsletter");
  if (newsletter == "") {
    setTimeout(function() {
      $('.popup_wrapper').css({"opacity": "1", "visibility": "visible"});

    }, {% if settings.newsletter_popup_time%} {{ settings.newsletter_popup_time}} {% else %} 1000 {% endif %});

  }
}
