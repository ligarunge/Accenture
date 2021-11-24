function insert_Row() {

    const rowCount = document.querySelectorAll('#sampleTable tr')
    .length;
    const newRowNumber = rowCount + 1;

    let table = document.getElementById('sampleTable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `NEW + ${newRowNumber}`;
    cell2.innerHTML = "NEW";
 
}
