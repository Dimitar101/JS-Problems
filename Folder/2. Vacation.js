function solve(groupSize, groupType, dayWeek) {
    let totalPrice;
    let singlePrice;

    if (dayWeek === 'Friday') {
        if (groupType === 'Students') {
            singlePrice = 8.45;
        } else if (groupType === 'Business') {
            singlePrice = 10.90;
        } else if (groupType === 'Regular') {
            singlePrice = 15;
        }
    } else if (dayWeek === 'Saturday') {
        if (groupType === 'Students') {
            singlePrice = 9.80;
        } else if (groupType === 'Business') {
            singlePrice = 15.60;
        } else if (groupType === 'Regular') {
            singlePrice = 20;
        }
    } else if (dayWeek === 'Sunday') {
        if (groupType === 'Students') {
            singlePrice = 10.46;
        } else if (groupType === 'Business') {
            singlePrice = 16;
        } else if (groupType === 'Regular') {
            singlePrice = 22.50;
        }
    }

    totalPrice = singlePrice * groupSize;

    if (groupType === 'Students' && groupSize >= 30) {
        totalPrice = totalPrice * 0.85;     // totalPrice *= 0.85;
    }
    if (groupType === 'Business' && groupSize >= 100) {
        totalPrice = totalPrice - (singlePrice * 10);
    }
    if (groupType === 'Regular' && 10 <= groupSize && groupSize <= 20) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}




solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");