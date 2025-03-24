// $(document).ready(function() {
//     function printTextOneByOne(selector, text, delay, callback) {
//         let i = 0;
//         function typeChar() {
//             if (i < text.length) {
//                 $(selector).append(text[i]);
//                 i++;
//                 setTimeout(typeChar, delay);
//             } else if (callback) {
//                 callback(); // Call the next action when the text is done printing
//             }
//         }
//         typeChar();
//     }

//     const textToPrint = "Abinash M";
//     const childText = "I'm a full stack developer.";
//     const delay = 200; // Delay in milliseconds

//     // First print the main site name, then print the child site name
//     printTextOneByOne(".main_sitename", textToPrint, delay, function() {
//         printTextOneByOne(".child_sitename", childText, delay);
//     });
// });

$(document).ready(function() {
    function printTextOneByOne(selector, text, delay, callback) {
        let i = 0;
        $(selector).html("");
        function typeChar() {
            if (i < text.length) {
                $(selector).append(text[i]);
                i++;
                setTimeout(typeChar, delay);
            } else if (callback) {
                setTimeout(callback, 1000);
            }
        }
        typeChar();
    }

    const texts = [
        "I'm a Full-Stack Developer.",
        "I'm a Senior Software Engineer.",
        "Web & Mobile Application Developer.",
        "Freelance web developer available for Web Application, Deployment & Maintenance."
    ];

    let currentIndex = 0;
    const delay = 100;

    function cycleTexts() {
        printTextOneByOne(".child_sitename", texts[currentIndex], delay, function() {
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(cycleTexts, 200);
        });
    }

    $(".main_sitename").text("Abinash M");
    cycleTexts();
});
