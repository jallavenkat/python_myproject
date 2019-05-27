jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
/*	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});*/

	$(".cntBtn").unbind().on("click",function(){
	   var cname = $("#cname").val();
	    var cemail = $("#cemail").val();
	     var cmobile = $("#cmobile").val();
	     if(cmobile != '' && cemail !='' && cname != '')
	     {
	        var formdata=$("form#main-contact-form1").serialize();
    	    $.ajax({
    	        type:"POST",
    	        url:"sendemail.php",
    	        data:formdata,
    	        async:false,
    	        success:function(resp)
    	        {
    	            if(resp == 1)
    	            {
    	                $("#fSatus").html("Thank you for contact us. As early as possible  we will contact you");
    	                $("#cname").val('');
    	                $("#cemail").val('');
    	                $("#cmobile").val('');
    	                $("#cmessage").val('');
    	            }
    	        }
    	    });
	     }
	     else
	     {
	         if(cname == '')
	         {
	             $("#cname").css({"border":"1px solid #ff0000"});
	         }
	         else
	         {
	             $("#cname").css({"border":"1px solid #ccc"});
	         }
	         
	         if(cemail == '')
	         {
	             $("#cemail").css({"border":"1px solid #ff0000"});
	         }
	         else
	         {
	             $("#cemail").css({"border":"1px solid #ccc"});
	         }
	         
	         if(cmobile == '')
	         {
	             $("#cmobile").css({"border":"1px solid #ff0000"});
	         }
	         else
	         {
	             $("#cmobile").css({"border":"1px solid #ccc"});
	         }
	     }
	});
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});