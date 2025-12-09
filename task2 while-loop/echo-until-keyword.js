// Echo Until Keyword

var text = "hai";

while (text != "bye") {
    console.log(`You said:${text}`);




    if(text == "hai") {
        text = "how are you";
    } else if(text == "how are you") {
        text = "ok bye";
    } else if(text == "ok bye") {
        text = "bye";
    }
}

console.log("Conversation ended.");
