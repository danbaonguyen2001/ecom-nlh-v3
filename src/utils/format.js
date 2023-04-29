export const toVND = function (cash = 0) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(cash);
  // return cash.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};
export const toUSD = function (cash = 0) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cash);
  // return cash.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};
export const toDate = function (date = new Date()) {
  let day = new Date(date);
  return day.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const toDateNow = function (date = new Date()) {
  let daTemp = new Date(date);
  let dateNow = new Date();
  let x = "";
  console.log(dateNow);
  console.log(daTemp);
  const day = daTemp.getDay();
  const month = daTemp.getMonth();
  const year = daTemp.getFullYear();
  const time = daTemp.getHours() + ":" + daTemp.getMinutes();
  console.log(time);
  //   return day.toLocaleDateString("vi-VN", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  console.log(dateNow.getDate() === daTemp.getDate());
  console.log(dateNow.getTime() - daTemp.getTime());
  const a = dateNow.getTime() - daTemp.getTime();
  console.log(Date(a));

  if (dateNow.getDate() > daTemp.getDate()) {
    // if(dateNow.getTime())
  }
  //   Same date
  else {
  }

  return time + "-" + day + "/" + month + "/" + year;
};
//handler search params
export const getParamsValue = (search, name) => {
  let index = "";
  const params = search.replace(/\?/, "").split("=");
  index = params.findIndex((v) => {
    return v == name;
  });
  if (index != -1) {
    return params[index + 1];
  } else return false;
};
