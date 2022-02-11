export const getCurrentDate = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  date < 10 && (date = `0${date}`);
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year} / ${month < 10 ? `0${month} /` : `${month} /`} ${date}`;
};

export const getCurrentTime = () => {
  let newDate = new Date();
  let hour = newDate.getHours();
  hour < 10 && (hour = `0${hour}`);

  let minute = newDate.getMinutes();
  minute < 10 && (minute = `0${minute}`);

  return `${hour} : ${minute}`;
};
