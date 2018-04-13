// Exercise One //

var total = 0;

var num = prompt("Enter A Number!");

for(x = 0; x<= 10; x++) {
  x++;
}

console.log(total);

// Exercise Two //

var userinput;
do{
  userinput = prompt("Do you want to play?");
  if (userinput == "yes"){
    prompt("Enter A Word");
  } else if(userinput == "dog"){
    prompt("Do you want to play again?");
  } else if(userinput == "cat"){
    prompt("Do you want to play again?");
  } else {
    prompt("cat dog");
  }
}
while (userinput === "yes");

console.log(userinput);

// Exercise Three //

userinput = 0;

 userinput=prompt("Would you like to print your name?");
  while (userinput === "yes"){
    console.log("Hello. My name is Adam");}
  if (userinput == "yes"){
  prompt ("Would you like to print this again?");
}

//I got stuck and wasn't able to finish on time. I think I'm over-thinking loops//

// Exercise Four //

var listIndex = ["morning", "noon", "evening"];

do {
  list = prompt("What time of the day is it?");
  if (List === "morning")
    prompt ("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
  } else if (userinput === "noon"){
    prompt ("Since it is noon, you should be eating lunch. We suggest a salad.");
  } else if (userinput === "evening"){
    prompt ("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
  }
while (userinput === "morning", "noon", "evening");

//Stuck as to why this will not work... maybe I don't need this to have an array? I am starting to understand it, but in need of some guidance.//
