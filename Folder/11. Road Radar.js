function solve(speed, area) {


    function calStatus(diff) {
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
    }


    function checkSpeeding(speed, speedLimit) {
        if (speed > speedLimit) {
            difference = speed - speedLimit;
            calStatus(difference);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    }


    let difference;
    let status;

    let areaSpeedLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    checkSpeeding(speed, areaSpeedLimit[area]);
}




solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')