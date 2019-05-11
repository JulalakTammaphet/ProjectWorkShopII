var urlSearchParams = URL.searchParams;
let params = (new URL(document.location)).searchParams;
let tid = params.get("id");
let options = {};
var show = '';
console.log(tid);

$(document).ready(function() {
    var url = "http://localhost:3000/customers?";
    $.get(url, function(data) {
        // console.log(data);          
        var all = data.length;
        var r = "";
        for (var i = 0; i < all; i++) {
            if (data[i].customerID === tid) {
                r += '<tr><td>' + data[i].customerID + '</td><td>' +
                    data[i].companyName + '</td><td>' + data[i].contactName + '</td><td>' + data[i].contactTitle + '</td><td>' +
                    "street :" + data[i].address.street + "<br>" +
                    "city :" + data[i].address.city + "<br>" +
                    "region :" + data[i].address.region + "<br>" +
                    "postalCode :" + data[i].address.postalCode + "<br>" +
                    "country :" + data[i].address.country + "<br>" +
                    "phone :" + data[i].address.phone +
                    '</td></tr>';
            }
        }
        document.getElementById('dataTable').innerHTML = r;

        show += "<div class='" + 'bg-white py-2 collapse-inner rounded' + "'>" +
            "<h6 class='" + 'collapse-header' + "'>" + "Custom Components:</h6>" +
            "<a class='" + 'collapse-item' + "'" + "href='" + 'editcust.html?id=' + tid + '"' + '>Edit Customer</a>' +
            +"<a class='" + 'collapse-item' + "'" + "href='" + 'custdetail.html"' + '>Detail Customer</a>' +
            "</div>";
        ocument.getElementById('collapseTwo').innerHTML = show;
    });
});


/////////////////////
var Search = data;

var data[i] = Search[document.cookie];
var id = data[i].customerID
$("#id").val(id);
console.log(id);

var name = data[i].companyName
$("#name").val(name);
console.log(name);
var contactname = data[i].contactName
$("#contactname").val(contactname);
console.log(contactname);

var contacttitle = data[i].contactTitle
$("#contacttitle").val(contacttitle);
console.log(contacttitle);
var address = data[i].address.street + data[i].address.city + data[i].address.region +
    data[i].address.postalCode + data[i].address.country + data[i].address.phone;
$("#address").val(address);
console.log(address);