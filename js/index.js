function addRow() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = "Information";
    cell2.innerHTML = "Annual wages";
    cell3.innerHTML = "Holidays";
    cell4.innerHTML = "Normal per hour";
    cell5.innerHTML = "Overtime 1";
    cell6.innerHTML = "Overtime 2";
    cell7.innerHTML = "Bonus";
    cell8.innerHTML = "Total gross";
    cell9.innerHTML = "Notes";
  }
  