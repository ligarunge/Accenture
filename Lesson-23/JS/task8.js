function getOptions() {

    const options = document.querySelectorAll('#mySelect option');
    const output = `
Number of options: ${options.lenght}
List of options
    `; 
    for (const option of options) {
        output += option.innerText + "\n";
    }
}

