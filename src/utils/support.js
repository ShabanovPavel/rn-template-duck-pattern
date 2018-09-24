export const arrayToMap = (array, key, initial = {}) =>
    array.reduce((prev, item) => {
        const o = prev;
        const i = item[key];
        o[i] = item;
        return o;
    }, initial);

export const objectToHash = object => {
    const hash = {};
    Object.keys(object).forEach(key => {
        hash[key] = JSON.stringify(object[key]);
    });
    return hash;
};

export const objectToArray = object => {
    const mas = [];
    Object.keys(object).forEach(item => {
        mas.push(object[item]);
    });
    return mas;
};
