$(document).ready(function() {
   console.log("Test");
   var header = $("<h1>");
   var div1 = $("<div>").text("Haiku Chat is where it's at,");
   var div2 = $("<div>").text("But you already knew that,");
   var div3 = $("<div>").text("So enter your syllables,");
   var div4 = $("<div>").text("and check if 5, 7, 5's got your back");

   var haikuDiv = $("<div>").addClass("haikuEntry");
   var haikuLine1 = $("<input type='text'>").text();
   var submitButton = $("<button>").text("Check if you've made a haiku");

   $(header).appendTo("body");
   $(div1).appendTo(header);
   $(div2).appendTo(header);
   $(div3).appendTo(header);
   $(div4).appendTo(header);
});
function clickHandlers() {

}

function syllableCount(userString, vowels) {
    var syllables = 0;
    while (syllables <= 17) {
        for (var i = 0; i <= vowels.length -1; i++) {
            for (var j = 0; j <= userString.length -1; j++) {
                if (vowels[i] === userString[j]) {
                    syllables += 1;
                }
            }
        }
    }
    console.log(syllables);
    return syllables;
}