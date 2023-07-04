export function convertSecondsToHumanReadable(inputSeconds: number) {
  const time = new Date(inputSeconds * 1000);
  const hours = time.getUTCHours();
  const hoursWord = hours > 1 ? 'hours' : 'hour';
  const minutes = time.getUTCMinutes();
  const minutesWord = minutes > 1 ? 'minutes' : 'minute';
  const seconds = time.getUTCSeconds();
  const secondsWord = seconds > 1 ? 'seconds' : 'second';
  return `${hours} ${hoursWord} ${minutes} ${minutesWord} ${seconds} ${secondsWord}`;
}
