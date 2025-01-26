document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const outputField = document.getElementById('outputField');
    const garbageSection = document.getElementById('garbage-field')
    let ltrArray = [];
    let chunksItem = [];
    let garabage = ''

    // Helper arrays
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '"', '<', '>', ',', '.', '?', '/', '\\', '|', '`', '~'];


    // Function to process and filter data
    function returnLetterOnly() {
        let filteredData = '';
        chunksItem.forEach((ltr) => {
            if (nums.includes(ltr) || specialChars.includes(ltr)) {
                garabage += ltr;
            } else {
                filteredData += ltr;
            }
        });
        return filteredData;
    }

    function returnNumberOnly() {
        let filteredData = '';
        chunksItem.forEach((ltr) => {
            if (chars.includes(ltr) || specialChars.includes(ltr)) {
                garabage += ltr;
            } else {
                filteredData += ltr;
            }
        });
        return filteredData;
    }

    function returnSpecialCharOnly() {
        let filteredData = '';
        chunksItem.forEach((ltr) => {
            if (chars.includes(ltr) || nums.includes(ltr)) {
                garabage += ltr;
            } else {
                filteredData += ltr;
            }
        });
        return filteredData;
    }

    function returnLetterANDSpecialCharOnly() {
        let filteredData = '';
        chunksItem.forEach((ltr) => {
            if (nums.includes(ltr)) {
                garabage += ltr;
            } else {
                filteredData += ltr;
            }
        });
        return filteredData;
    }

    function returnLetterANDNumbers() {
        let filteredData = '';
        chunksItem.forEach((ltr) => {
            if (specialChars.includes(ltr)) {
                garabage += ltr;
            } else {
                filteredData += ltr;
            }
        });
        return filteredData;
    }

    function returnNumberANDSpecialCharOnly() {
        let filteredData = '';
        chunksItem.forEach((ltr) => {
            if (chars.includes(ltr)) {
                garabage += ltr;
            } else {
                filteredData += ltr;
            }
        });
        return filteredData;
    }

    // Main function to determine filtering mode
    function checkChunkMode(chunkMode) {
        let filteredData = '';
        switch (chunkMode.toUpperCase()) {
            case 'L':
                filteredData = returnLetterOnly();
                break;
            case 'N':
                filteredData = returnNumberOnly();
                break;
            case 'C':
                filteredData = returnSpecialCharOnly();
                break;
            case 'NC':
            case 'CN':
                filteredData = returnNumberANDSpecialCharOnly();
                break;
            case 'LC':
            case 'CL':
                filteredData = returnLetterANDSpecialCharOnly();
                break;
            case 'LN':
            case 'NL':
                filteredData = returnLetterANDNumbers();
                break;
            default:
                console.log(chunkMode, ': Command Not Found');
        }
        return filteredData;
    }

    // Event Listener for "Letters Only"
    document.getElementById('lettersOnly').addEventListener('click', () => {
        const chunks = userInput.value; 
        ltrArray = [chunks]; 
        chunksItem = chunks.split(''); 

        const finalData = checkChunkMode('L');
        outputField.textContent = finalData
        garbageSection.innerHTML = `Garbage $ ${garabage}`;
        garabage = null
    });

    // Event Listener for "NumbersOnly"
    document.getElementById('NumbersOnly').addEventListener('click', () => {
        const chunks = userInput.value; 
        ltrArray = [chunks]; 
        chunksItem = chunks.split(''); 

        const finalData = checkChunkMode('N');
        outputField.textContent = finalData
        garbageSection.innerHTML = `Garbage $ ${garabage}`;
        garabage = null
    });

    // Event Listener for "characatersOnly"
    document.getElementById('characatersOnly').addEventListener('click', () => {
        const chunks = userInput.value; 
        ltrArray = [chunks]; 
        chunksItem = chunks.split(''); 

        const finalData = checkChunkMode('C');
        outputField.textContent = finalData
        garbageSection.innerHTML = `Garbage $ ${garabage}`;
        garabage = null
    });

    // Event Listener for "lettersAndNumbersOnly"
    document.getElementById('lettersAndNumbersOnly').addEventListener('click', () => {
        const chunks = userInput.value; 
        ltrArray = [chunks]; 
        chunksItem = chunks.split(''); 

        const finalData = checkChunkMode('LN');
        outputField.textContent = finalData
        garbageSection.innerHTML = `Garbage $ ${garabage}`;
        garabage = null
    });

    // Event Listener for "lettersAndCharactersOnly"
    document.getElementById('lettersAndCharactersOnly').addEventListener('click', () => {
        const chunks = userInput.value; 
        ltrArray = [chunks]; 
        chunksItem = chunks.split(''); 

        const finalData = checkChunkMode('LC');
        outputField.textContent = finalData
        garbageSection.innerHTML = `Garbage $ ${garabage}`;
        garabage = null
    });

    // Event Listener for "numbersAndCharaccotersOnly"
    document.getElementById('numbersAndCharaccotersOnly').addEventListener('click', () => {
        const chunks = userInput.value; 
        ltrArray = [chunks]; 
        chunksItem = chunks.split(''); 

        const finalData = checkChunkMode('NC');
        outputField.textContent = finalData
        garbageSection.innerHTML = `Garbage $ ${garabage}`;
        garabage = null
    });

});
