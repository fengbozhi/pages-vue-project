export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let temArr = item.substring(1).split('=');
      let key = decodeURIComponent(temArr[0]);
      let val = decodeURIComponent(temArr[1]);
      obj[key] = val;
    });
  }
  return obj;
}
