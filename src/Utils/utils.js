export function convertTime(time_ms) {
  const ms_seconds = Math.floor(time_ms / 1000);
  const minutes = Math.floor(ms_seconds / 60);
  const seconds = Math.floor(ms_seconds % 60);
  var minString = "";
  if (minutes < 1) {
    minString = minutes + ":" + seconds + " seg";
  } else {
    minString = minutes + ":" + seconds + " min";
  }
  return minString;
}

export function convertDate(dataUSA) {
  let dataBR = dataUSA.split("-").reverse().join("/");
  return dataBR;
}
