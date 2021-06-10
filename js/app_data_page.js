const warningMsg = d3.select('#filters').append('span')

// from housing.json
var tableData = housing;

// define and connect table body
var tableBody = d3.select('tbody');

//create function for the table body
function buildTable(housing) {
  tableBody.html("");
  housing.forEach((row) => {
    var tRow = tableBody.append('tr');
    Object.values(row).forEach((value) => {
      let cell = tRow.append("td");
      cell.text(value);
    })
  });
}


// function runEnter() {

//   var selectCity = d3.select('#cities').property('value');

//   if (selectCity) {
//     warningMsg.attr("style", "display: none")
//     filtered_city = (tableData.filter(Crime => Crime.City == selectCity));

//     buildTable(filtered_city)
//   } else {
//     warningMsg.text(`Please insert one of these years [${validDates[0]}, ${validDates[1]}, ${validDates[2]}].`)
//       .attr("style", "display: inline; color: red;")
//   }
// }

// // filter button
// var button = d3.select("#filter-btn");
// button.on("click", runEnter);

// render the table
buildTable(tableData);

// console.log()