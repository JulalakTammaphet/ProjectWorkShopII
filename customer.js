$(document).ready(function() {
    var url = "http://localhost:3000/customers?";
    $.get(url, function(data) {
        // console.log(data);
           
        var all =data.length;
        var r ="";
        for(var i =0;i<all;i++){
             r += "<tr><td><a href="+'"custdetail.html?id='+data[i]["customerID"]+">"+i+"."+data[i]["customerID"]+"</a></td>"
             +"<td>"+ data[i]["companyName"]+ "</td><td>"+
             data[i]["contactName"]+"</td><td> "
             +data[i]["contactTitle"]+"</td></tr>";

             
             
             
        }  
        

        
        
        // var customerData = '';
        // $.each(data, function(key, value) {
        //     customerData += '<tr>';
        //     customerData += '<td>' + value.customerID + '</td>';
        //     customerData += '<td>' + value.companyName + '</td>';
        //     customerData += '<td>' + value.contactName + '</td>';
        //     customerData += '<td>' + value.contactTitle + '</td>';
        //     customerData += '</tr>';
        // });
        document.getElementById('dataTable').innerHTML = r;
    });
});


