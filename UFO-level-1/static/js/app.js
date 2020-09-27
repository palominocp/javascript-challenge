// from data.js
var tableData = data;

// YOUR CODE HERE!

const element = document.querySelector("tbody");
element.innerHTML = "<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>";

var tableContent = "";

for (index = 0; index < data.length; index++) {
    tableContent += "<tr><td>" + data[index]['datetime'] + "</td>" + 
    "<td>" + data[index]['city'] + "</td>" + 
    "<td>" + data[index]['state'] + "</td>" + 
    "<td>" + data[index]['country'] + "</td>" + 
    "<td>" + data[index]['shape'] + "</td>" +
    "<td>" + data[index]['duration'] + "</td>" + 
    "<td>" + data[index]['comments'] + "</td>" + "</tr>";
}
element.innerHTML = tableContent;
