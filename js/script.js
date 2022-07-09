var Site={
	       init : function(){
		     this.tabs();
	       },

	       tabs : function(){
		      var container = $("#main .col-sm-10"),
		          uls = container.children(".main-body"),
		          thumbnails = $(".thumbnails");

		       //change the selected heading to the selected one    
		      thumbnails
		        .on('click','li',function(e){
		   	        var li = $(this),
		   	            hash;

		   	       //li.siblings().removeClass('selected').end().addClass('selected'); 
		   	       hash = li.children('a').attr('href');

		   	       uls.hide().filter(hash).fadeIn(800); 

		   	   e.preventDefault();        
		     });
	      }
        }

         Site.init();

         /*$('.thumbnails li').hover(
           function(){
              $(this).addClass('hover-state');
           },

           function(){
              $(this).removeClass('hover-state');
        }); */

        $('.thumbnails').on('mouseenter','li', function(){
            $(this).addClass('hover-state');
        });

        $('.thumbnails').on('mouseleave','li', function(){
            $(this).removeClass('hover-state');
        }); 


        $('.thumbnails li a').click(
          function(e){
            $(this).closest('li').siblings().removeClass('current').end().addClass('current');
            e.preventDefault();
        });

        $('.thumbnails li a').eq(1).click();
