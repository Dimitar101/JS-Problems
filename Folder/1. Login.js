function solve(arr) {
    const username = arr.shift();
    const correctPassword = username.split('').reverse().join('');
    let correctPasswordGiven = false;

    for (let i = 0; i < 4; i++) {
        const passwordAttempt = arr[i];

        if (passwordAttempt == correctPassword) {
            console.log(`User ${username} logged in.`);
            correctPasswordGiven = true;
            break;
        } else {
            if (i != 3) {
                console.log('Incorrect password. Try again.');
            }
        }
    }

    if (!correctPasswordGiven) {
        console.log(`User ${username} blocked!`);
    }
}


// solve(['Acer','login','go','let me in','recA'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])
