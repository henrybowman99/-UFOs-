// import data 
const tableData = data;

//use d3 to reference the HTML table
var tbody = d3.select("tbody")

function buildTable(data){
    //Clear out any existing data
    tbody.html("");
    
    //loop through data

    data.forEach((dataRow) =>{
        //create new row for each object in data
        let row = tbody.append("tr");
        //create new cell for each value and assign the cell the value
        Object.values(dataRow).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
    }
    );
    });
}
