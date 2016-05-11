$('a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  $('#linkedinbutton, #emailbutton').unbind('click');
});

//	Click on nav link and skip to appropriate section
$('#topNav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's scrollTop to the targetOff set
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});

//	click on section 2 button
	$('#section2 .pageButton a').on('click', function() {
	//	fade out background image
		$('#section2').fadeOut(300);
	//	fade in new content content
		$('#section2content').delay(300).fadeIn(1000);
		$('#section2content .backButton').fadeOut().delay().fadeIn(5000);
	});
	//	click anywhere on section
	$('#section2content .backButton').on('click', function() {
	//	fade out content
		$('#section2content').fadeOut(300);
	//	fade in previous section
		$('#section2').delay(300).fadeIn(2000);
		$('#section2 .pageButton').fadeOut().delay().fadeIn(5000);

	});

//	click on section 3 button
	$('#section3 .pageButton a').on('click', function() {
	//	fade out background image
		$('#section3').fadeOut(300);
	//	fade in new content content
		$('#section3content').delay(300).fadeIn(1000);
		$('#section3content .backButton').fadeOut().delay().fadeIn(5000);
	});
	//	click anywhere on section
	$('#section3content .backButton').on('click', function() {
	//	fade out content
		$('#section3content').fadeOut(300);
	//	fade in previous section
		$('#section3').delay(300).fadeIn(1000);
		$('#section3 .pageButton').fadeOut().delay().fadeIn(5000);
	});

//	click on section 4 button
	$('#section4 .pageButton a').on('click', function() {
	//	fade out background image
		$('#section4').fadeOut(300);
	//	fade in new content content
		$('#section4content').delay(300).fadeIn(1000);
		$('#section4content .backButton').fadeOut().delay().fadeIn(5000);
	});
	//	click anywhere on section
	$('#section4content .backButton').on('click', function() {
	//	fade out content
		$('#section4content').fadeOut(300);
	//	fade in previous section
		$('#section4').delay(300).fadeIn(1000);
		$('#section4 .pageButton').fadeOut().delay().fadeIn(5000);
	});

// Click on Nav links 
	$('#topNav a').on('click', function() {
	//	reset sections	
			//	fade out content
				$('#section2content, #section3content, #section4content').fadeOut(300);
			//	fade in previous section
				$('#section2, #section3, #section4').delay(300).fadeIn(1000);
	});

//	carousel
	// create an array of image paths
var images = ['11.jpg', '22.jpg', '33.jpg', '44.jpg', '55.jpg', '66.jpg', 'dancecity.jpg', '77.jpg', '88.jpg'];

//  set a variable for our currentPosition
var currentPosition = 0;
 $('#prev').prop('disabled', false).hide();
//  when the user clicks on the next button
$('#next').on('click', function() {
	// add one to the currentPosition
	currentPosition += 1;
  $('#prev').prop('disabled', false).show();
    //  if current position is the last index
    	if (currentPosition === 8) {
    //  disable the next button
        $('#next').prop('disabled', true).hide();
      }
    //  change the src of #image-to-vote-on to current image
      $('#image-to-vote-on').attr('src', 'img/' + images[currentPosition]);
      //  show likes
      $('#votes').html('Likes: ' + likeCount[currentPosition]);
});
//  when the user click on the previous button
$('#prev').on('click', function() {
  //  subtract one from the currentPosition
  currentPosition -= 1;
  //  enable next button
  $('#next').prop('disabled',false).show();
  //  if currentPosition is 0
  if(currentPosition === 0) {
    //  disable previous button
    $('#prev').prop('disabled', true).hide();
  }
  //  change the src of image
  $('#image-to-vote-on').attr('src', 'img/' + images[currentPosition]);
  //  show likes
  $('#votes').html('Likes: ' + likeCount[currentPosition]);
});

  //  when the user click  the upvote button
var likeCount = [0,0,0,0,0,0];

$('#upvote').on('click', function() {
  likeCount[currentPosition] = likeCount[currentPosition] + 1;
  $('#votes').html('Likes: ' + likeCount[currentPosition]);
});


  // when the user clicks the downvote button
  $('#downvote').on('click', function() {
  likeCount[currentPosition] = likeCount[currentPosition] - 1;
  $('#votes').html('Likes: ' + likeCount[currentPosition]);
});


//	click on #emailbutton

	//	opens up email form
