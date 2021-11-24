function createTable() {
    const rowCount = document.getElementById('row-count').value;
    const colCount = document.getElementById('col-count').value;

let tableContent = '';

for (const rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    tableContent += '<tr>';
    for (let colIndex = 0; colIndex <colCount; colIndex++) {
        tableContent += `<td>Row ${rowIndex + 1} Cell ${colIndex + 1}</td>`;
    }
    tableContent += '</tr>';
}
document.getElementById('sampleTable').innerHTML
}