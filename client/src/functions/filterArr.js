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

export default filterArr