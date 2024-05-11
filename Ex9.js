const marks = [80, 90, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    // let sum =0;
    //  for(let mark of marks)
    //     sum += mark;
    // let average = sum / marks.length;
    const average = calculateAverage(marks);

    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    else return 'A';
}

function calculateAverage(array){
    let sum = 0;

    for(let value of array)
        sum += value;
    return sum / array.length;
}