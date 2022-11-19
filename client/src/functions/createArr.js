export const createArrFromNum = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push({ num: i + 1 })
    }
    return arr;
}

export const createArrAdults = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push({ firstName: "", lastName: "", dob: "", phone: "" })
    }
    return arr;
}