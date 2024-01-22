function smallestOfThree(n1, n2, n3) {
    if (n2 < n1 && n2 < n3) {
        return n2;
    } else if (n3 < n1 && n3 < n2) {
        return n3;
    }
    return n1
}


// let smallestOfThree = (x, y, z) => Math.min(x, y, z);


console.log(smallestOfThree(2, 5, 3));
console.log(smallestOfThree(600, 342, 123));
console.log(smallestOfThree(25, 21, 4));
console.log(smallestOfThree(2, 2, 2));
