// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // clear out any existing data
  tbody.html("");

  // loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // append a row to the table body
    let row = tbody.append("tr");

    // loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

//create filters variable
var filters = {}


//create function to update filters based on inputs 
function updateFilters() {

    // save the element that was changed as updatedElement variable
    let updatedElement = d3.select(this);
 
    //save the value of updated element in separate variable
    let elementValue = updatedElement.property("value")
    //  save the id of the filter that was changed as a variable.
    let updatedElementId = updatedElement.attr("id")
  
    // if filter value was entered then add that filterId and value
    // to the filters list. If not make sure that filter is removeed from the filters object.
    if (elementValue){
      filters[updatedElementId] = elementValue;
    
    }
    else{
      delete filters[updatedElementId];
    }
   
    
    
    //call filterTable function to apply all filters and rebuild the table
    filterTable();
  };
  
  
  //create function to filter the table when data is entered.
  function filterTable() {
  
    //  default the filtered data to the tableData.
    let filteredData = tableData;
    // check if each filter is in filters object and keep any data that
    // matches the filter values
    //check if datetime is in filters and if it is filter the data on date
    if ("datetime" in filters){
      function filterdate(sightings){
        
          return sightings.datetime == filters.datetime;

      }
    
    filteredData = filteredData.filter(filterdate);
    //if not keep the data the same as it was
    }else{
      filteredData = filteredData;
      
    }
    //check if city is in filters and if it is filter data on city
    if ("city" in filters){
      function filtercity(sightings){
        
          return sightings.city == filters["city"];

      }
    
    filteredData = filteredData.filter(filtercity);
    //if not keep the data the same
    }else{
      filteredData = filteredData;
      
    }
    //check if state is in filters and if it is filter data on state
    if ("state" in filters){
      function filterstate(sightings){
        
          return sightings.state == filters["state"];

      }
    
    filteredData = filteredData.filter(filterstate);
    //if not keep the data the same
    }else{
      filteredData = filteredData;
      
    }
    //check if country is in filters and if it is filter data on country
    if ("country" in filters){
      function filtercountry(sightings){
        
          return sightings.country == filters["country"];

      }
    
    filteredData = filteredData.filter(filtercountry);
    //if not keep the data the same
    }else{
      filteredData = filteredData;
      
    }
    //check if shape is in filters and if it is filter data on shape
    if ("shape" in filters){
      function filtershape(sightings){
        
          return sightings.shape == filters["shape"];

      }
    
    filteredData = filteredData.filter(filtershape);
    //if not keep the data the same
    }else{
      filteredData = filteredData;
      
    }
    
    // rebuild the table using the filtered data
    buildTable(filteredData);
 

  

    }
  
    
  
  
  // attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // build table with full data when the table when the page loads
  buildTable(tableData);
  
