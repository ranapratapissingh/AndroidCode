 $(document).ready(function() {
    $('.trending_story_tab').click(function(e){
		$('.trending_story_list').toggle();
		//$('.trending_story_list').show();
		});

		
	$('#more_category_list_btn').click(function(){
		$('.more_category_list').toggle();
		//$('#more_category_list_btn').hide();
		$('#less_category_list_btn').show();
		});
		
	$('#less_category_list_btn').click(function(){
		$('.more_category_list').toggle();
		$('#more_category_list_btn').show();
		$('#less_category_list_btn').hide();
		});
	
	
	$('.small_feeds, .left_section_feed').mouseenter(function(){	
		$(this).find('.story_title_div').css({'bottom':'0px'});
		$(this).find('.meta_detail_home').css({'margin-bottom':'0px'});
		/*$(this).find('.category_home').css({'right':'10px'});*/
		$(this).find(".category_home").animate({'top':'5px'},50);
		$(this).find(".category_home").css({'display':'block'});
		$('body').css({'overflow-x':'hidden'});
		/*setInterval(function(){
			$(".category_home").css({'display':'block'});
			}, 40);*/
		});

	$('.small_feeds, .left_section_feed').mouseleave(function(){	
		$(this).find('.story_title_div').css({'bottom':'10px'});
		$(this).find('.story_title_div .meta_detail_home').css({'margin-bottom':'-47px'});
		/*$(this).find('.category_home').css({'right':'-150px'});*/
		$(this).find(".category_home").animate({'top':'-150px'},50);
		$(this).find(".category_home").css({'display':'none'});
		$('body').css({'overflow-x':'auto'});
		/*setInterval(function(){
			//$(".category_home").css({'display':'none'});
			console.log('Hello Junaid');
			}, 4);*/
		});
	$('.trending_story_item').mouseenter(function(){
		$(this).find('.bottom-section').css({'position':'absolute', 'top':'0px', 'bottom':'0px', 'left':'0px', 'right':'0px', 'margin':'auto', 'z-index':'-99999', 'height':'93px', 'border':'none'});
		});

	$('.trending_story_item').mouseleave(function(){
		$(this).find('.bottom-section').css({'position':'static', 'z-index':'999', 'height':'225px', 'border-right':'1px solid #666', 'border-bottom':'1px solid #666'});
		});
		
	$('.search_custome').click(function(){
		$('.search_input_box').css({'width':'100%', 'border':'1px solid #ccc', 'padding':'5px', 'height':'28px'});
		$('.trending_story_container').css('display', 'none');
		$('.custome_category_list').css('display', 'none');
		$('.custome_input_groups').css({'margin-top':'10px', 'margin-bottom':'10px'});
		$('.search_custome button').css({'border':'1px solid #ccc'});
		$('.search_custome').css({'top':'0px'});
		});
		
	/*$('.trending_story_item').mouseenter(function(){
		//alert('hiii');
		$(this).find('img').css({'left':'0px', 'top':'500px', 'z-index':'-1'});
	//	$(this).closest('div').css({'left':'0px', 'top':'500px', 'z-index':'-1'});
		});

	$('.trending_story_item').mouseleave(function(){
		//alert('hiii');
//		$(this).closest('div').slideDown();
		$(this).find('img').css({'left':'0px', 'top':'0px', 'z-index':'10'});
//		$(this).closest('div').css({'left':'0px', 'top':'0px'});
		});*/

});
$(document).click(function(e){
   if($(e.target).closest('.trending_story_tab').length != 0) return false;
   $('.trending_story_list').hide();
});