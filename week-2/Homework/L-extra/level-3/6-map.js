// 1. Write a function (`capitalise`) that capitalises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `capitalise` function

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}
// complete this function
function capitalise(str) {
  let newArray = str[1].toUpperCase().concat(str.slice(2)) ;
  return newArray;
 }

var mentorsTidy = mentors.map(tidyUpString);
var mentorsTidyAndCapitalised = mentors.map(capitalise);

console.log(mentorsTidyAndCapitalised);



/*
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
