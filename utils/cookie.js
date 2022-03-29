
/**
 * @desc 存储cookie
 * @param cname {String} - cookie名称
 * @param cvalue {String} - cookie值
 * @param cvalue {Object} - cookie值
 * @param time {Number} - cookie存储时间/天（默认为关闭浏览器销毁）
 * @author chenbingze
 * @date 2020/11/5
 */
const set = (cname, cvalue, time) => {
  cvalue = JSON.stringify(cvalue);
  if (time) {
    var d = new Date();
    d.setTime(d.getTime() + time * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  } else {
    document.cookie = cname + "=" + cvalue;
  }
};

/**
 * @desc 获取cookie
 * @param cname {String} - cookie名称
 * @author chenbingze
 * @date 2020/11/5
 */
const get = (cname) => {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};

/**
 * @desc 删除cookie
 * @param cname {String} - cookie名称
 * @author chenbingze
 * @date 2020/11/5
 */
const del = (cname) => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = this.get(cname);
  if (cval !== "") {
    if (cval) {
      document.cookie = cname + "=" + cval + ";expires=" + exp.toGMTString();
    }
  }
};

/**
 * @desc 获取cookieJSON格式
 * @param cname {String} - cookie名称
 * @author chenbingze
 * @date 2020/11/5
 */
const getJSON = (cname) => {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return null;
};


module.exports = {
  set,
  get,
  del,
  getJSON,
}