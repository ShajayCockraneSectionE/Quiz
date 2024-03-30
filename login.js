$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault(); //Prevent form submission

        //Get the values entered by the user
        var username = $('#username').val();
        var password = $('#password').val();

        //Fake authentication
        if (username === 'shajayc' && password === '0121') {
           // If authentication is successful, redirect to quiz page
           window.location.href ='quiz.html'; // Replace 'quiz.html with the URL of your quiz page 
        } else {
            // If authentication fails, display an error message
            $('#login-container').append('<p class="error">Invalid username or password</p>');
        }
        });
    });
