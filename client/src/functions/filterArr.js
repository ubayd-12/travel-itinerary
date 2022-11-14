const filterArr = (item, arr, par) => {

    if (arr) {
        return arr.filter((el) => el[par] === item)
    }

}

export const filterArrNum = (item, arr, par) => {

    if (arr) {
        return arr.filter((el) => Number(el[par]) < item)
    }

}


export const filterOnlyUnique = (arr, key) => {

    const temp = arr.map((item) => {
        return item[key]
    })

    return [...new Set(temp)]

}

export const filterArrWOptions = (arr, options) => {
    const props = Object.keys(options);
    const size = Object.keys(options).length;
    let tracker = size;

    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < size; j++) {
            if (typeof (arr[i][props[j]]) === "number") {
                if (options[props[j]] >= arr[i][props[j]]) {
                    tracker--;
                }
            } else {
                console.log(typeof (arr[i][props[j]]))
                if (!(String(options[props[j]]) === String(arr[i][props[j]]))) {
                } else {
                    tracker--;
                }
            }
        }
        if (tracker === 0) {
            temp.push(arr[i]);
        }
        tracker = size;
    }

    return temp;
};

export const filterArrWOptionsASpecs = (arr, options, specOptions) => {
    const props = Object.keys(options);
    const size = Object.keys(options).length;
    let tracker = true;

    let temp = [];

    let specOptionsCounter = 0

    if (!specOptions) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < size; j++) {
                if (!(String(options[props[j]]) === String(arr[i][props[j]]))) {
                    tracker = false
                } else {
                    tracker = true;
                }
            }
            if (tracker === true) {
                temp.push(arr[i]);
            }
            tracker = true;
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < size; j++) {
                if (specOptions[specOptionsCounter] === Object.keys(arr[i])[j]) {
                    if (arr[i][specOptions[specOptionsCounter]] <= options[props[specOptionsCounter]]) {
                        tracker = true
                    } else {
                        tracker = false
                        break
                    }
                    specOptionsCounter++
                }

            }
            specOptionsCounter = 0
            if (tracker === true) {
                temp.push(arr[i]);
            }
            tracker = true;
        }
    }

    return temp;
};

export default filterArr