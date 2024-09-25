// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index = 0) {
    if (typeof collection === 'string' || Array.isArray(collection)) {
        return collection.slice(index).includes(value);
    } else {
        return Object.values(collection).includes(value);
    }
}
