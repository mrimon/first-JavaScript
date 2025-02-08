// grade based on scoring

const score = parseFloat(prompt("Put your score:"));

if(score >=90 && score <= 100){
    document.write("You got 'A' grade.")
}
else if(score >=80 && score <=89){
    document.write("You Got 'B' grade.")
}
else if(score >=70 && score <=79){
    document.write("you Got 'C' grade.")
}
else if(score >=60 && score >=69){
    document.write("You Got 'E' grade.")
}
else if(score >0 && score <=59){
    document.write("You Got 'F' grade.")
}
else {
    document.write("Invalid Score!")
}

// score >=80 && score <=89 ? document.write("You Got 'B' grade.") : document.write("Invalid Score!");

