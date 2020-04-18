export const timeConvert = (val) => {
  let timeSplit = val.split(':');
  let time = +timeSplit[0] * 3600 + (+timeSplit[1] * 60);
  return time;
};

export const valueTypeOf = (val) => {
  return Math.floor(val);
};
