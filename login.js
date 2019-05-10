$.validator.setDefaults({
    submitHandler: function() {}
});
$.validator.methods.equal = function(value, element, param) {
    return value == param;
};
$().ready(function() {
    var validator = $("#form").bind("invalid-form.validate", function() {
        $("#summary").html("Your form contains " + validator.numberOfInvalids() + " errors, see details below.");
    }).validate({
        debug: true,
        errorElement: "em",
        errorContainer: $("#warning, #summary"),
        errorPlacement: function(error, element) {
            error.appendTo(element.parent("div").next("span"));
            $("#err").show();
        },
        success: function(label) {
            label.text("").addClass("success");
            $("#err").hide();
        },
        rules: {
            email: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: "Please enter a email",
                minlength: "Your email must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
});
$("#login").click(function() {

        if (status == 'success') {
            if($("#email").val() == "admin@nw.com" && $("#password").val() == "12345**"){
            $("#suc").show();
            console.log("Success");
            console.log(data.usesrname);
            setTimeout(window.location.href = "dashboard.html" );
            }
        } else {
            $("#err").show();
        
         }
});
