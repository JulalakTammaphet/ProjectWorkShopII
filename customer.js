$(document).ready(function() {
    var url = "http://localhost:3000/customers?";
    $.get(url, function(data) {
        console.log(data);
        
        var customerData = '';
        $.each(data, function(key, value) {
            customerData += '<tr>';
            customerData += '<td>' + value.customerID + '</td>';
            customerData += '<td>' + value.companyName + '</td>';
            customerData += '<td>' + value.contactName + '</td>';
            customerData += '<td>' + value.contactTitle + '</td>';
            customerData += '</tr>';
        });
        $('#dataTable').append(customerData);
    });
});

