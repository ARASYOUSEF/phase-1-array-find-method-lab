// code your solution here
const record = [
    {year: "2024", result: "L"},
    {year: "2023", result: "W"},
    {year: "2022", result: "N/A"}
 
  ]
function superbowlWin(array){
   const old = array.find(age => age.result === "W")
   if (old){
    return old.year
   } else {
    return undefined
   }
}