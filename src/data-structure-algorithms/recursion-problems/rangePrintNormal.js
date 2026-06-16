function printRange(num, i = 1) {
    if (i > num) return; // base case
    console.log(i);
    printRange(num, i + 1);

}

//Outputs:
printRange(10); // 1 2 3 4 5 6 7 8 9 10
printRange(5); // 1 2 3 4 5