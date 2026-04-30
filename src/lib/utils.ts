/**
 * Format a Date to "DD MMM YYYY" (e.g., "15 Jun 2025")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Format a Date to "MMM YYYY" (e.g., "Jun 2025")
 */
export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Sort items by date descending (newest first)
 */
export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
