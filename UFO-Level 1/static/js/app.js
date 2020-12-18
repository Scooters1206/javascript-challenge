// From data.js
var tableData = data;

// Select the body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-control");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault(); 
    // Select the input element and get the raw HTML node
    let input = d3.select("#datetime")
    // Get the value property of the input element
    let datevalue = input.property("value")
    // Use the form input to filter the data by date
    let newData = tableData.filter(item => item.datetime === datevalue)
    console.log(newData)

    // Populate new data to table
    newData.forEach(obj => {
        
        // Make new row
        var row = tbody.append("tr");

        // Append each row with data
        row.append("td").text(obj.datetime);
        row.append("td").text(obj.city);
        row.append("td").text(obj.state);
        row.append("td").text(obj.country);
        row.append("td").text(obj.shape);
        row.append("td").text(obj.durationMinutes);
        row.append("td").text(obj.comments);
    });
};