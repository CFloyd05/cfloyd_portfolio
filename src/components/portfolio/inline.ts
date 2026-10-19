// Tiny formatter for portfolio text: escapes HTML, then turns **bold** into <b>bold</b>.
export function inline(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
}

// "https://cfloyd.ca/projects/ENPH253" -> "cfloyd.ca/projects/ENPH253"
export function displayUrl(href: string): string {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
