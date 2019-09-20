// $('#course-Front-End').click(
// 	function(){
// 		$('#course-Front-End-content').css('display','block');
// 	}
// )
// $('#course-Java').click(
// 	function(){
// 		$('#course-Java-content').css('display','block');
// 	}
// )

$('.btn-course').click(
	function(){
		let myId = $(this).attr('id')
		let btn = $(this);

		$('.btn-course').removeClass('btn-success');
		btn.addClass('btn-success');


		$('.course__info').removeClass('active');
		$('#'+myId+'-content').addClass('active');
		
		
	}
)

$('.card-header').click(
	function(){
		let btnContainer = $(this).next();
		let btnName = $(this).attr('name');

		if(btnContainer.is(':empty')){
			$('.course__info').removeClass('active');
			$('#'+btnName+'-content').addClass('active');
		}else{
		btnContainer.find('button:first-of-type').click();
		}
	}	
)
