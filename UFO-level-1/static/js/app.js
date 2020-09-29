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

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() {
  d3.event.preventDefault();
  
  var dateInput = d3.select("#datetime").property("value");

  var tableContent = "";
  for (index = 0; index < data.length; index++) {
    if (new Date(dateInput).getTime() === new Date(data[index]['datetime']).getTime()) {
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
  element.innerHTML = tableContent;
};
