$(function() {
    $("#username_error_message").hide();
    $("#password_error_message").hide();
    $("#retype_password_error_message").hide();
    $("#email_error_message").hide();
    var error_username = false;
    var error_password = false;
    var error_retype_password = false;
    var error_email = false;
    $("#form_username").focusout(function() {
        check_username();

    });


    function check_username() {

        var username_length = $("#form_username").val().length;

        if (username_length < 5 || username_length > 20) {
            $("#username_error_message").html("Should be between 5-20 characters");
            $("#username_error_message").show();
            error_username = true;
        } else {
            $("#username_error_message").hide();
        }

    }
});