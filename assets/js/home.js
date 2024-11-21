$(document).ready(function() {
    function printTextOneByOne(selector, text, delay, callback) {
        let i = 0;
        function typeChar() {
            if (i < text.length) {
                $(selector).append(text[i]);
                i++;
                setTimeout(typeChar, delay);
            } else if (callback) {
                callback(); // Call the next action when the text is done printing
            }
        }
        typeChar();
    }

    const textToPrint = "Abinash M";
    const childText = "I'm a full stack developer.";
    const delay = 200; // Delay in milliseconds

    // First print the main site name, then print the child site name
    printTextOneByOne(".main_sitename", textToPrint, delay, function() {
        printTextOneByOne(".child_sitename", childText, delay);
    });
});
