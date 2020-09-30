// from data.js
var tableData = data;

// YOUR CODE HERE!

// Grab reference to the table body
var element = d3.select("tbody");

// Generate table content from data
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
element.html(tableContent);

// Grab reference to form HTML
// No need to declare var button = d3.select("#filter-btn"); as in HTML button is type="submit" (changed from type="button")
var form = d3.select('#form');

// Create event handler for clicking the button or pressing the enter key
form.on('submit', runFilter);

// Create the function to run the filter
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input data
  var dateInput = d3.select("#datetime").property("value");
  var cityInput = d3.select("#city").property("value");
  var stateInput = d3.select("#state").property("value");
  var countryInput = d3.select("#country").property("value");
  var shapeInput = d3.select("#shape").property("value");

  // Generate content for filtered table
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
  element.html(tableContent);
};
