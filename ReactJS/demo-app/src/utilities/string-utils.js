const lowerCase = str => str.toLowerCase();
const sortAlphabeticaly = (str1,str2) =>  str1>str2 ? 1: -1;

function lowerCaseAndSort(arrData) {
    // if(!Array.isArray(arrData) || arrData.every(str => typeof str === 'string')){
    //     throw new Error('Data must be array')
    // }
    return arrData.map(lowerCase).sort(sortAlphabeticaly)
}

export default lowerCaseAndSort;