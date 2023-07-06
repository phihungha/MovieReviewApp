export function secondsToLongFormat(inputSeconds: number) {
  const time = new Date(inputSeconds * 1000);
  const hours = time.getUTCHours();
  const hoursWord = hours > 1 ? 'hours' : 'hour';
  const minutes = time.getUTCMinutes();
  const minutesWord = minutes > 1 ? 'minutes' : 'minute';
  const seconds = time.getUTCSeconds();
  const secondsWord = seconds > 1 ? 'seconds' : 'second';
  return `${hours} ${hoursWord} ${minutes} ${minutesWord} ${seconds} ${secondsWord}`;
}

export function dateToStandardDateFormat(dateInput: Date | string) {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function dateToStandardDateTimeFormat(dateInput: Date | string) {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const formattedDate = dateToStandardDateFormat(date);
  const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
  return `${formattedDate} ${formattedTime}`;
}
