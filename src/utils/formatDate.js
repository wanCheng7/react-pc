/**
 * 日期时间格式化
 *
 * @static
 * @param {String} [date, date format]
 * @returns {String} // 'yyyy.MM.dd hh:mm:ss'
 * @memberof utils
 */
export const formatDate = (date, fmt) => {
    date = new Date(date);
    let o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
    };
    if (/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(let k in o) {
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
    return fmt;
};