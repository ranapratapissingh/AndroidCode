// JavaScript Document

$(document).ready(function(){
	$(".list-group-item").mouseenter(function(){
		$(this).find(".sub_keyword").css("display", "block");
		$(".left_shadow").css("z-index", "-10");
	});
	
	$(".list-group-item").mouseleave(function(){
		$(this).find(".sub_keyword").css("display", "none");	
		$(".left_shadow").css("z-index", "0");
	});
	
	$(".sub_keyword_item_internal_list1").mouseenter(function(){
		$(".sub_cat_internal_right1").addClass("active_sub_category");
		$(".sub_cat_internal_right2").removeClass("active_sub_category");
		$(".sub_cat_internal_right3").removeClass("active_sub_category");
		$(".sub_cat_internal_right4").removeClass("active_sub_category");
		$(".sub_keyword_item_internal_list1").css("background", "#718fc8");
		$(".sub_keyword_item_internal_list1").css("color", "#fff");
	});
	
	$(".sub_keyword_item_internal_list1").mouseleave(function(){
		$(".sub_keyword_item_internal_list1").css("background", "transparent");
		$(".sub_keyword_item_internal_list1").css("color", "#000");
	});
	$(".sub_keyword_item_internal_list2").mouseenter(function(){
		$(".sub_cat_internal_right2").addClass("active_sub_category");
		$(".sub_cat_internal_right1").removeClass("active_sub_category");
		$(".sub_cat_internal_right3").removeClass("active_sub_category");
		$(".sub_cat_internal_right4").removeClass("active_sub_category");
		$(".sub_keyword_item_internal_list2").css("background", "#718fc8");
		$(".sub_keyword_item_internal_list2").css("color", "#fff");

	});

	$(".sub_keyword_item_internal_list2").mouseleave(function(){
		$(".sub_keyword_item_internal_list2").css("background", "transparent");
		$(".sub_keyword_item_internal_list2").css("color", "#000");
	});

	$(".sub_keyword_item_internal_list3").mouseenter(function(){
		$(".sub_cat_internal_right3").addClass("active_sub_category");
		$(".sub_cat_internal_right2").removeClass("active_sub_category");
		$(".sub_cat_internal_right1").removeClass("active_sub_category");
		$(".sub_cat_internal_right4").removeClass("active_sub_category");
		$(".sub_keyword_item_internal_list3").css("background", "#718fc8");
		$(".sub_keyword_item_internal_list3").css("color", "#fff");
	});

	$(".sub_keyword_item_internal_list3").mouseleave(function(){
		$(".sub_keyword_item_internal_list3").css("background", "transparent");
		$(".sub_keyword_item_internal_list3").css("color", "#000");
	});

	$(".sub_keyword_item_internal_list4").mouseenter(function(){
		$(".sub_cat_internal_right4").addClass("active_sub_category");
		$(".sub_cat_internal_right2").removeClass("active_sub_category");
		$(".sub_cat_internal_right3").removeClass("active_sub_category");
		$(".sub_cat_internal_right1").removeClass("active_sub_category");
		$(".sub_keyword_item_internal_list4").css("background", "#718fc8");
		$(".sub_keyword_item_internal_list4").css("color", "#fff");

	});

	$(".sub_keyword_item_internal_list4").mouseleave(function(){
		$(".sub_keyword_item_internal_list4").css("background", "transparent");
		$(".sub_keyword_item_internal_list4").css("color", "#000");
	});

$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });
  
  /*===================*/
  
  $('.top_stories_btn').click(function(){
			$('#top_stories_container').slideDown();
			$('#new_contact_container').slideUp();
			});
		
		$('.top_stryteller_btn').click(function(){
			$('#top_stryteller_container').slideDown();
			$('#top_stories_container').slideUp();
			});
			
	     
		
		$('.admin_img_number').click(function(){
			if($('#admin_stry_imges').hasClass('down'))
			{
				$('#admin_stry_imges').slideUp();
				//$('#admin_stry_imges').addClass('up');
				$('#admin_stry_imges').removeClass('down');
			}
			else 
			{
				$('#admin_stry_imges').slideDown();
				$('#admin_stry_imges').addClass('down');
				//$('#admin_stry_imges').removeClass('up');
			}
			});
		
		$('.new_stories_btn').click(function(){
			$('#new_stories_contriner').slideDown();
			$('#stry_features_container,#stry_rejected_container').slideUp();
			});
		
		
		$('.features_btn').click(function(){
			 $('#stry_features_container').slideDown();
			 $('#new_stories_contriner,#stry_rejected_container').slideUp();
			});
		
	    $('.rejected_btn').click(function(){
			$('#stry_rejected_container').slideDown();
			$('#new_stories_contriner,#stry_features_container').slideUp();
			});
			
			
			
        $("#lightbox").click(function(){
			//alert('jkjsddkfjkl');
	    $('#backdrop').animate({'opacity':'.5'},300,'linear')
	     $('#backdrop, #dropbox').css('display','block');
			});
			
			$('#close').click(function(){
				close_tab();
				});
				
		   $('#backdrop').click(function(){
			    close_tab();
			   });
		   function close_tab(){
			   $('#backdrop,#dropbox').css('display','none')
			   }
    
	     
		 $('.Available_Categorry_btn').click(function(){
			 $('#Available_Categorry_container').slideDown();
			  $('.Available_Categorry_btn').css('border-bottom',' 2px solid #718FC8');
			  $('.Create_category_btn').css('border-bottom','none');
			 $('#Create_category_container').slideUp();
			 });
	
	    $('.Create_category_btn').click(function(){
			$('#Create_category_container').slideDown();
			 $('.Create_category_btn').css('border-bottom',' 2px solid #718FC8');
			  $('.Available_Categorry_btn').css('border-bottom','none');
			$('#Available_Categorry_container').slideUp();
			});
			
			
	    $('.weekly_user_btn').click(function(){
			$('#weekly_user_container').slideDown();
			$('#monthly_user_container,#yearly_user_container').slideUp();
			});
			
	   $('.monthly_user_btn').click(function(){
			$('#monthly_user_container').slideDown();
			$('#weekly_user_container,#yearly_user_container').slideUp();
			});
			
	  
	  $('.yearly_user_btn').click(function(){
			$('#yearly_user_container').slideDown();
			$('#monthly_user_container,#weekly_user_container').slideUp();
			});
			
	 $('.category_hover_edit_delete').hover(
	  function (){
		  if(!$(this).find('input').hasClass('v_hide') ) {
		  $(this).find('.admin_edit_delete_span').show();
		  }
		  else {
			  //$(this).find('.admin_edit_save_category').show();
			  }
		  },
	  function (){
		 if($(this).find('input').hasClass('v_hide') ) {
		  $(this).find('.admin_edit_delete_span').hide();
		  //$(this).find('.admin_edit_save_category').hide();
		  }
		  else {
			  $(this).find('.admin_edit_delete_span').hide();
			 // $(this).find('.admin_edit_save_category').hide();
			  }
		  }
	 );
	 
	/*$('.admin_edit_save_category').click(function(){
		var v=$(this).parent().find('input').val();
		$(this).parent().find('.admin_category_name').html(v+'<input  name="category" type="text" value="'+v+'" style="display:none">');	
		$(this).parent().css('padding','8px 5px');
		});
	*/
	$('.admin_edit_input').keyup(function (event){
		 if(event.keyCode== 13)
		 {
			 var v=$(this).val();
			 v=v.trim();
			 var t = $(this).parent().parent().find('.admin_category_name');
		$(t).find('span').text(v);
		$(t).find('span').show();
		$(this).parent().parent().find('.admin_edit_input').removeClass('v_hide');
		$(this).parent().parent().find('.admin_edit_input').hide();		
		$(this).parent().parent().css('padding','8px 5px');
			 }
		});
	
	$('.admin_edit_category').click(function(){
		if(!$(this).parent().parent().find('input').hasClass('v_hide') ) {
		var v=$(this).parent().parent().find('.admin_category_name').text();
		v=v.trim();
		var t = $(this).parent().parent().find('.admin_category_name');
		$(t).find('span').hide();
		$(this).parent().parent().find('.admin_edit_input').val(v);
		$(this).parent().parent().find('.admin_edit_input').addClass('v_hide');
		$(this).parent().parent().find('.admin_edit_input').show();
		
		$(this).parent().parent().css('padding','5px 5px');
		$(this).parent().parent().find('.admin_edit_delete_span').hide();
		}
		else {
		var v=$(this).parent().parent().find('input').val();
		v=v.trim();
		
		var t = $(this).parent().parent().find('.admin_category_name');
		$(t).find('span').text(v);
		$(t).find('span').hide();
		$(this).parent().parent().find('.admin_edit_input').val(v);
		$(this).parent().parent().find('.admin_edit_input').removeClass('v_hide');
		$(this).parent().parent().find('.admin_edit_input').hide();	
		$(this).parent().parent().css('padding','8px 5px');
			}
		});		
			
		$('.admin_delete_category,.delete_story').click(function(){
			$('#delete_box').slideDown();
			$('.admin_edit_delete_span').hide();
			});	
	     
		 $('.yes_delete,.no_delete').click(function(){
			  $('#delete_box').hide();
			 });
	  
	  $('.top_stories_btn').hover(function(){
		 	 $('#top_category_drawer').show();
	      });
	
		   $('#top_category_drawer').click(function(){
			   			$(this).hide();
			   });
			   
      /*$('.select_category_dropdown').change(function(e){
		  	$('#tags').val(e.target.value);
		  });*/
		  
		  $(document.body).on('click', '.select_value_li', function() {
			  	//alert();
				$('#input_selected_value').val($(this).find('a').text());
			  });
			   
			   
	    $("#input_selected_value").keydown(function (e) {
	 	e.preventDefault();
        
    });
	
	$('.story_title_input').click(function(){
		  $('.create_story_heading').css({'font-size':'40px', 'text-align':'left', 'margin-top':'0px'}); 
		  $('.story_title_input').css({'font-size':'28px', 'height':'42px', 'padding-left':'15px'})
		  $('.story_title_input_div').css({'margin-left':'0%'})
		  $('#input_placeholder').css({'text-align':'left'})
		  //$('#create_story_category').css('diplay','block');
		  
		 $('#create_story_category').show();
		 $(".input_stry_discription").attr("contenteditable", "true");
		 $('#crete_story_discription').show();
		 
		});
	

});
/*$('#tags').keyUp(function(){
  $('.onkeyup').hide();
});*/
