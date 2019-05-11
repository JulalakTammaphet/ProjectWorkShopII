$(function() {


            $.get("data/customers.json", function() {
                    console.log(data);
                    $('#datalist').append(tablehead);
                    for (var index in movies) {
                        var customer = movies[index];
                        var tableRow = '<tr><td>' + customer.CustomerID + '</td><td>' + customer.CompanyName + '</td><td>' + customer.ContactName + '</td><td>' + customer.ContactTitle + '</td></tr>'
                        $('#datalist').append(tableRow)
                        console.log(customer);




                    });

                document.getElementById("show").innerHTML = r;

            });