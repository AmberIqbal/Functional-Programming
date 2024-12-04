function consoleStyler(color, background, fontSize, txt) {
  let message = "%c" + txt;
  let style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

function celebrateStyler(reason) {
  fontStyle = "color:tomato;font-size:50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(message, style);
  }
}
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
return;
celebrateStyler("birthday");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}
styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
// Call styleAndCelebrate
