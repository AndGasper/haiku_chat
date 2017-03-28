$(document).ready(function() {
    htmlElementsSetup();

});

var header = $("<h1>").addClass("titleText");
var div1 = $("<div>").text("Haiku Chat is where it's at,");
var div2 = $("<div>").text("But you already knew that,");
var div3 = $("<div>").text("So enter your syllables,");
var div4 = $("<div>").text("and check if 5, 7, 5's got your back");
var haikuDiv = $("<div>").addClass("haikuEntry");
var haikuLine1 = $("<input type = 'text'>");
var haikuLine2 = $("<input type = 'text'>");
var haikuLine3 = $("<input type = 'text'>");
var submitButton = $("<button>").text("Check haiku");
$(submitButton).on("click",checkHaiku);

var syllableOutputDiv = $("<div>").addClass("outputDiv").text("Output");

var vowels = ["a", "e", "i", "o", "u", "y"]; // Sometimes y?
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];

function htmlElementsSetup() {
    console.log("htmlElementsSetup: Test");
    $(header).appendTo("body");
    $(div1).appendTo(header);
    $(div2).appendTo(header);
    $(div3).appendTo(header);
    $(div4).appendTo(header);

    $(haikuDiv).appendTo("body");
    $(haikuLine1).appendTo(haikuDiv);
    $(haikuLine2).appendTo(haikuDiv);
    $(haikuLine3).appendTo(haikuDiv);
    $(submitButton).appendTo(haikuDiv);

    $(syllableOutputDiv).appendTo(haikuDiv);
}
function syllableCount(userString, vowels) {
    var syllables = 0;
        for (var i = 0; i <= vowels.length -1; i++) {
            for (var j = 0; j <= userString.length - 1; j++) {
                if ((vowels[i] === userString[j]) && (userString[j] !== userString[j+1]) && (userString[j+1] !== ("a" || "e" || "i" || "o" || "u" || "y")) )  { //&& ( (userString[j+1] !== ("a" || "e" || "i" || "o" || "u" || "y")) && (userString[j-1] !== ("a" || "e" || "i" || "o" || "u" || "y")))) {
                    syllables += 1;
                }
            }
        }
    console.log(syllables);
    return syllables;
}
function checkHaiku() {
console.log("Blah, blah!");
var syllableArray = [];
var line1Syllables = $("<div>").text(syllableCount(haikuLine1.val(), vowels));
var line2Syllables = $("<div>").text(syllableCount(haikuLine2.val(),vowels));
var line3Syllables = $("<div>").text(syllableCount(haikuLine3.val(), vowels));

syllableArray.push(line1Syllables);
syllableArray.push(line2Syllables);
syllableArray.push(line3Syllables);


for (var i = 0; i <= syllableArray.length -1; i++) {
    $(syllableArray[i]).appendTo(syllableOutputDiv);
}
return syllableArray
}

