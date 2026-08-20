/**
 * Common Helper Utilities
 */

export function formatDate(date: string | Date | null | undefined): string {
  if (!date) return '-';
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(d);
  } catch {
    return '-';
  }
}

export function formatNumber(val: number | null | undefined): string {
  if (val === null || val === undefined) return '0';
  return new Intl.NumberFormat('th-TH').format(val);
}
