
		//window.onload("main")
		//$().ready("main") 		

        $(function () {

		//	var quote = $('span.cita').clone().removeClass('cita').addClass('pullquote');
            // Situo el objeto JQuery en el punto en que quiero que aparezca
		//	$('this').before(quote);

            //Solucion al problema
            $('span.cita').each(function() {
                var quote=$(this).clone().removeClass('cita').addClass('pullquote');
            $(this).before(quote);
        })
        

            //Ahora más largo
            //Creo un objeto JQuery correspondiente al titular que quiero insertar
		    //var quote = $('span.pq')
			//var quote2 = quote.clone()
			//quote2 = quote2.removeClass('pq')
			//quote2 = quote2.addClass('pullquote')
			//$('span.pq').before(quote2); 						
			
			// Más corto
			//var quote = $('span.pq')
			//var quoteClon = quote.clone().removeClass('pq').addClass('pullquote')
			//quote.before(quoteClon); 						
			

		});
$( function() {
    $( "#draggable" ).draggable();
  } );
$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );