
// $.validator.setDefaults({
//     submitHandler: function() {}
// });
// $.validator.methods.equal = function(value, element, param) {
//     return value == param;
// };
// //validaor
$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$("#login").click(function() {
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;    
console.log(email,pwd);

            if(email == "admin@nw.com" && pwd== "12345**"){
            $("#suc").show();
            console.log("Success");
           window.location.href = "dashboard.html" ;
            }
         else {
            alert("Error Password or Email")
            $("#err").show();
        
         }
});
