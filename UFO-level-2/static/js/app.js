// from data.js
var tableData = data;

// YOUR CODE HERE!

const element = document.querySelector("tbody");

var tableContent = "";
for (index = 0; index < data.length; index++) {
    tableContent += "<tr>" + 
    "<td>" + data[index]['datetime'] + "</td>" + 
    "<td>" + data[index]['city'] + "</td>" + 
    "<td>" + data[index]['state'] + "</td>" + 
    "<td>" + data[index]['country'] + "</td>" + 
    "<td>" + data[index]['shape'] + "</td>" +
    "<td>" + data[index]['duration'] + "</td>" + 
    "<td>" + data[index]['comments'] + "</td>" + 
    "</tr>";
}
element.innerHTML = tableContent;

const form = document.getElementById("form");
form.addEventListener('submit', runFilter);

function runFilter(event) {
  event.preventDefault();

  var dateInput = d3.select("#datetime").property("value");
  var cityInput = d3.select("#city").property("value");
  var stateInput = d3.select("#state").property("value");
  var countryInput = d3.select("#country").property("value");
  var shapeInput = d3.select("#shape").property("value");

  var tableContent = "";
  for (index = 0; index < data.length; index++) {
    if (dateInput === "" || new Date(dateInput).getTime() === new Date(data[index]['datetime']).getTime()) {
      if (cityInput === "" || cityInput === data[index]['city']) {
        if (stateInput === "" || stateInput === data[index]['state']) {
          if (countryInput === "" || countryInput === data[index]['country']) {
            if (shapeInput === "" || shapeInput === data[index]['shape']) {
              tableContent += "<tr>" + 
              "<td>" + data[index]['datetime'] + "</td>" + 
              "<td>" + data[index]['city'] + "</td>" + 
              "<td>" + data[index]['state'] + "</td>" + 
              "<td>" + data[index]['country'] + "</td>" + 
              "<td>" + data[index]['shape'] + "</td>" +
              "<td>" + data[index]['duration'] + "</td>" + 
              "<td>" + data[index]['comments'] + "</td>" + 
              "</tr>";
            }
          }
        }
      }
    }
  }
  element.innerHTML = tableContent;
};
