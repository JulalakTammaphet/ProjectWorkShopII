$(document).ready(function() {
    var url = "http://localhost:3000/products?";
    $.get(url, function(data) {
        var all = data.length;
        console.log(all);
        
       var Product = all+("Item");
        $('#totalProduct').append(Product);
    });
});

$(document).ready(function() {
    var url = "http://localhost:3000/orders?";
    $.get(url, function(data) {
        console.log(data);
        
        var allOrder = data.length;
        console.log(allOrder);
        
       var Order = allOrder
        $('#totalOrder').append(Order);
    });
});

$(document).ready(function() {
    var url = "http://localhost:3000/suppliers?";
    $.get(url, function(data) {
        var allSupplier = data.length;
        console.log(allSupplier);
        
       var Supplier = allSupplier;
        $('#totalSupplier').append(Supplier);
    });
});

$(document).ready(function() {
    var url = "http://localhost:3000/customers?";
    $.get(url, function(data) {
        console.log(data);
        
        var allCustomer = data.length;
        console.log(allCustomer);
        
       var Customer = allCustomer+("People");
        $('#totalCustomer').append(Customer);
    });
});

