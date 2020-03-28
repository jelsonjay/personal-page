//-----------FILTER----------------//
$(document).ready(function() {
  $(".category").on("change", function() {
    var category_list = [];
    $("#filters :input:checked").each(function() {
      var category = $(this).val();
      category_list.push(category);
    });

    if (category_list.length == 0) $(".resultblock").fadeIn();
    else {
      $(".resultblock").each(function() {
        var item = $(this).attr("data-tag");
        if (jQuery.inArray(item, category_list) > -1) $(this).fadeIn("slow");
        else $(this).hide();
      });
    }
  });
});

//-----------MENU-------------------//
+(function($) {
  "use strict";

  // spy and scroll menu boogey
  $(" a[href^='#']").on("click", function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000,
      function() {
        window.location.hash = hash;
      }
    );
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      $("a.back-to-top").fadeIn("fast");
    } else {
      $("a.back-to-top").fadeOut("slow");
    }
  });
})(jQuery);
