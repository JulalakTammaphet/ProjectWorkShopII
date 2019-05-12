var urlSearchParams = URL.searchParams;
let params = (new URL(document.location)).searchParams;
let tid = params.get("id");
let options = {};
var show='';
console.log(tid);

$(document).ready(function() {
    var url = "http://localhost:3000/customers?";
    $.get(url, function(data) {
        // console.log(data);          
        var all =data.length;
        var r ="";
        for(var i =0;i<all;i++){
            if(data[i].customerID===tid){
            r += '<tr><td>'+data[i].customerID+'</td><td>'
         +data[i].companyName+'</td><td>'+data[i].contactName+'</td><td>'+data[i].contactTitle+'</td><td>'
         +"street :"+data[i].address.street+"<br>" +
         "city :"+ data[i].address.city + "<br>" +
         "region :"+ data[i].address.region + "<br>" +
         "postalCode :"+ data[i].address.postalCode + "<br>" +
         "country :"+ data[i].address.country + "<br>" +
         "phone :"+ data[i].address.phone +
         '</td></tr>';                   
        }  
    }
        document.getElementById('dataTable').innerHTML = r;
      
    });
});