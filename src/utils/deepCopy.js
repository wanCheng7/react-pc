/**
 * 深拷贝
 *
 * @static
 * @param {Object} data
 * @returns {Object} data
 * @memberof utils
 */
export const deepCopy = (data) => {
    const that = this;
    if (Object.prototype.toString.call(data) === "[object Array]"){
        return data.map(((item) => {
            if (Object.prototype.toString.call(item) === "[object Array]" || Object.prototype.toString.call(item) === "[object Object]") {
                return that.deepCopy(item);
            }
            return item;
        }));
    } else if (Object.prototype.toString.call(data) === "[object Object]") {
        let newData = {};
        for (let i in data) {
            if (Object.prototype.toString.call(data[i]) === "[object Array]" || Object.prototype.toString.call(data[i]) === "[object Object]") {
                newData[i] = that.deepCopy(data[i]);
            } else {
                newData[i] = data[i];
            }
        }
        return newData;
    }
};