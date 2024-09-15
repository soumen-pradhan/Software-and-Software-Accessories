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

type DateFmt = 'human' | 'dots';

export function fmtDate(date: Date, fmt: DateFmt = 'human'): string {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  switch (fmt) {
    case 'human':
      return `${MONTHS[month]} ${day}, ${year}`;

    case 'dots':
      return `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;

    default:
      return `${MONTHS[month]} ${day}, ${year}`;
  }
}
