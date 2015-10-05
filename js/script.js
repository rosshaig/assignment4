
// Hello! Advance apologies - my indentation is a bit mad here. Is there a best
// practice when it comes to script?

// MAKE SURE DOC IS READY BEFORE SCRIPT

$(document).ready(function(){


// PREVENT FORM SUBMISSION


    $( "a" ).click(function( event ) {
      event.preventDefault();

    });


// READ MORE

      $( ".readmore" ).click(function() {

        $( ".readmore" ).hide();

        $( "#show-this-on-click" ).slideDown( "10");

        $( ".readless" ).show();

      });

//READ LESS

        $( ".readless" ).click(function() {

          $( ".readless" ).hide();

          $( "#show-this-on-click" ).slideUp( "10");

          $( ".readmore" ).show("20");

        });


// READ MORE - SIDEBAR

        $( ".learnmore" ).click(function() {

          $( ".learnmore" ).hide();

          $( "#learnmoretext" ).slideDown( "30");

        });

});
