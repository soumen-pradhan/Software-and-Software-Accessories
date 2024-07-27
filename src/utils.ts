export function extractRouteName(url: string): string {
  // Remove trailing slash if present
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }

  // Get the last part of the URL
  const parts = url.split('/');
  return parts[parts.length - 1];
}

const MONTHS = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
] as const;

export function fmtDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return `${MONTHS[month]} ${day}, ${year}`;
}
