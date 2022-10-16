const firstFourNums = (num) => {

    if (num < 0) {
        const first2Str = String(num).slice(0, 6);
        const first2Num = Number(first2Str);
        return first2Num
    } else {
        const first2Str = String(num).slice(0, 5);
        const first2Num = Number(first2Str);
        return first2Num
    }

}

export default firstFourNums