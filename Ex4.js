checkSpeed(130);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint)
        console.log('OK man, we chillin');
    else{
        const points = Math.floor((speed - speedLimit)) 
        if(points >= 12)
            console.log('License suspended MF');
        else    
            console.log('Points', points);
    }
}