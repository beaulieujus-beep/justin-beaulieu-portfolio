/**
 * Safely opens external links with proper security attributes
 * Prevents window.opener security vulnerability
 * Modern browsers (Chrome 88+, Firefox 79+, Safari 12.1+) handle this automatically,
 * but this ensures compatibility with older browsers
 */
export function openExternalLink(url: string) {
  // Modern browsers automatically set rel="noopener" for window.open with '_blank'
  // But to be explicit and support older browsers, we use an anchor element
  if (typeof window !== 'undefined') {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

