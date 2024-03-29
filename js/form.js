$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			// url: $(form).attr('action'),
			url: '',
			data: formData
		})
		.done(function(response) {
			console.log('done response',response)
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('bg-danger');
			$(formMessages).addClass('bg-success');
			// Set the message text.
			$(formMessages).text('留言发送成功！');
			// Clear the form.
			$('#name, #tel, #message').val('');			
		})
		.fail(function(data) {
			console.log('fail data',data)
			$(formMessages).removeClass('bg-success');
			$(formMessages).addClass('bg-danger');			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});