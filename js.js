$(document).ready(function(){
    $('#klu').hover(function(){
        $( this ).append( $("<div id='wy' ><a href='barcelona.html'>Barcelona</a><br><a href='real.html'>Real</a><br><a href='bayern.html'>Bayern</a></div>") );
    }, function() {
        $( this ).find( "div" ).remove();
      }
    
    );
  });