// import the data from data.js
const tableData = data;

// ref to HTML table using d3
var tbody = d3.select('tbody');

// creating a function to build table
function buildTable(data) {
    // clear data to create fresh table
    tbody.html("");

    // loop through each object in data
    // append row and cells for each value
    data.forEach((dataRow) => {

        // append row to table body
        let row = tbody.append("tr");

        // loop through each field in dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// function for the filter to act on the table when button is clicked
function handleClick() {
    // grab datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter the data using that date
    if (date) {
        // apply 'filter' to table data to only keep the dates that match
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    // note: if no date was entered, then filteredData will just be the orig data
    buildTable(filteredData);
};

// d3 to listen for click
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
