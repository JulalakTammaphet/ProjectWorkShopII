$(document).ready(function() {
    var url = "http://localhost:3000/products?";
    $.get(url, function(data) {
        var all = data.length;
        console.log(all);
        
       var Product = all+("Item");
        $('#totalProduct').append(Product);
    });
});

