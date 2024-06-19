const getCookie = (key: string) => {
  var result = null;
  var cookie = document.cookie.split(";");
  cookie.some(function (item) {
    item = item.replace(" ", "");

    var dic = item.split("=");

    if (key === dic[0]) {
      result = dic[1];
      return true;
    }
  });

  return result;
};

const removeCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export { getCookie, removeCookie };
