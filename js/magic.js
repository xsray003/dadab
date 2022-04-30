function formdata(){
  var fname=document.forms["userform"]["fname"]
  var nop=document.forms["userform"]["nop"]
  var date=document.forms["userform"]["date"]
  var branches=document.forms["userform"]["branches"]
  var phn=document.forms["userform"]["phn"]

            if (fname.value == "") {
                  window.alert("Please enter your  name");
                  fname.focus();
                  return false;
                  }

        if (nop.value == "") {
        window.alert("Please enter total no of guests");
        nop.focus();
        return false;
        }

        if (date.value == "") {
        window.alert("Please enter your Preffered Date & time");
        date.focus();
        return false;
        }

        if (branches.value == "") {
        window.alert("Please choose a branch");
        branches.focus();
        return false;
        }

        if (phn.value == "") {
        window.alert("Please enter your valid phone no");
        phn.focus();
        return false;
        }
        if (isNaN(phn.value)) {
        window.alert("Phone no must be digits");
        phn.focus();
        return false;
        }
        if (phn.value.length<10) {
        window.alert("Phone no must be 10 digits");
        phn.focus();
        return false;
        }
        if (phn.value.length>10) {
        window.alert("Phone no must be 10 digits");
        phn.focus();
        return false;
        }
        if ((phn.value.charAt(0)!=9) && (phn.value.charAt(0)!=8) && (phn.value.charAt(0)!=7)) {
        window.alert("Phone no must start with 9/8/7");
        phn.focus();
        return false;
        }
      return true;


}

(function ($) {
  "use strict";

  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery);

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(300,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(300,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  })(jQuery);
