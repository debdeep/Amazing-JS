function printRangeReverseOrder(num) {
    if (num === 0) {
        return;
    }; // base condition: logs number till 1 from number
    console.log(num);
    num -= 1;
    printRangeReverseOrder(num);

}

//Outputs:
printRangeReverseOrder(10); // 10 9 8 7 6 5 4 3 2 1
printRangeReverseOrder(5); // 5 4 3 2 1 