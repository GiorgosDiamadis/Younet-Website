import { format } from 'date-fns';



export function formatDate(date, pattern = 'PPP') {
  return format(new Date(date), pattern);
}


export function sortObjectsByDate(array, { key = 'date' } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}
