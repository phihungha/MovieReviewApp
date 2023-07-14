export function secondsToLongFormat(inputSeconds?: number | null) {
  let time;
  if (!inputSeconds) {
    time = new Date('0001-01-01');
  } else {
    time = new Date(inputSeconds * 1000);
  }
  const hours = time.getUTCHours();
  const hoursWord = hours > 1 ? 'hours' : 'hour';
  const minutes = time.getUTCMinutes();
  const minutesWord = minutes > 1 ? 'minutes' : 'minute';
  const seconds = time.getUTCSeconds();
  const secondsWord = seconds > 1 ? 'seconds' : 'second';
  return `${hours} ${hoursWord} ${minutes} ${minutesWord} ${seconds} ${secondsWord}`;
}

export function dateToStandardDateFormat(dateInput?: Date | string | null) {
  let date;
  if (!dateInput) {
    date = new Date('0001-01-01');
  } else {
    date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  }
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function dateToStandardDateTimeFormat(dateInput?: Date | string | null) {
  let date;
  if (!dateInput) {
    date = new Date('0001-01-01');
  } else {
    date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  }
  return date.toLocaleString('en-GB').substring(0, 17);
}

export function dateToIsoDateStr(dateInput?: Date | string | null) {
  let date;
  if (!dateInput) {
    date = new Date('0001-01-01');
  } else {
    date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  }
  return date.toISOString().substring(0, 10);
}
