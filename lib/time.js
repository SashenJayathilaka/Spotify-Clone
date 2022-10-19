export function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const second = ((millis % 60000) / 1000).toFixed(0);
  return second == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (second, 10 ? "0" : "") + second;
}
