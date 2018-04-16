// Exercise One //

prompt ("Enter A Number!");

var total = 0;
for (var num = 1; num <= 15; num++){
  total = total + num;
}

console.log("The total is: " + total);


// Exercise Two //

var userinput;
do{
  userinput = prompt("Do you want to play?");
  if (userinput === "yes"){
    prompt("Enter A Word");
  } if(userinput === "dog" || "cat"){
    prompt("Do you want to play again?");
  } if(userinput === "yes"){
    prompt("Enter A Word");
  } else {
    console.log(userinput);
  }
}
while (userinput === "yes");

console.log(userinput);

// I can't seem to figure out the sequencing for this //


// Exercise Three //

userinput = 0;
while(userinput === "yes");
 userinput=prompt("Would you like to print your name?");{
    console.log("Hello. My name is Adam");}
 userinput=prompt("Would you like to print again?"); {
    console.log("Hello. My name is Adam!"); }
 userinput=prompt("Would you like to print again?"); {
    console.log("Hello. My name is Adam!!"); }

//I think I'm over-thinking loops and possibly making it more complicated than it actually is//


// Exercise Four //

var answer = prompt("What time of day is it?");
if(answer === "morning") {
    console.log("Since it is morning, you should be eating breakfast. We suggest you eat eggs and toast.")
} else if(answer === "noon") {
    console.log("Since it is noon, you should be eating lunch. We suggest you eat a salad.")
} else if(answer === "evening") {
    console.log("Since it is evening, you should be eating dinner. We suggest you eat chicken and rice.")
}
