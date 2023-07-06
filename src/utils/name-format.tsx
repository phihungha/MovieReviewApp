export function getNameInitials(name: string) {
  const parts = name.split(' ');
  const firstLetter = parts.at(0)?.at(0) ?? '';
  const lastLetter = parts.at(-1)?.at(0) ?? '';
  return firstLetter + lastLetter;
}
