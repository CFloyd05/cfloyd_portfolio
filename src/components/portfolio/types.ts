// Shape of the `portfolio:` block you can add to the frontmatter of any file in src/content/.
// A file with no `portfolio:` block (or no `order`) is left out of the PDF.

export interface PortfolioImage {
  src?: string; // path under /public, e.g. "/projects/ENPH253/253Cad.jpg"; leave out to reserve the space
  placeholder?: string; // note shown in an empty slot (no src), e.g. "Photo: thermal enclosure"
  caption?: string;
  area?: string; // grid-area letter used in gallery.areas
  fit?: "cover" | "contain"; // cover = photo fills the box; contain = show the whole image (CAD, schematics)
  position?: string; // object-position for cropped photos, e.g. "center 15%"
  // Trim the image before fitting it: percent to cut from [top, right, bottom, left].
  // The trimmed area fills the frame's width and is centred vertically, e.g. [10, 45, 31, 5]
  crop?: [number, number, number, number];
  // Make this frame shorter than its row: width ÷ height, e.g. 2 for a 2:1 graph.
  // It's centred vertically, and its caption stays in line with the others in the row.
  aspect?: number;
  outline?: boolean; // thin dark box around the image, e.g. to frame a cropped plot like chart axes
}

// A bullet: plain text, or text with sub-bullets underneath
export type Bullet = string | { text: string; items: string[] };

export interface PortfolioGallery {
  columns: string; // CSS grid-template-columns, e.g. "1.5fr 1fr 1fr"
  rows: string; // CSS grid-template-rows, e.g. "205px 205px"
  areas?: string[]; // one string per row, e.g. ["a b c", "a d e"]
  images: PortfolioImage[];
}

export interface PortfolioEntry {
  order: number; // position in the PDF (lower comes first)
  layout?: "full" | "columns" | "half"; // two "half" entries in a row share one sheet
  section?: string; // label in the sheet's top bar, e.g. "Experience"
  title: string;
  org?: string;
  date?: string;
  logo?: string;
  summary?: string;
  tags?: string[];
  stats?: { value: string; label: string }[];
  flow?: string[]; // a row of chips joined by arrows
  gallery?: PortfolioGallery;
  columns?: { heading?: string; items: Bullet[] }[]; // for layout: columns; heading is optional
  highlights?: Bullet[]; // **bold** works inside these; use { text, items } for sub-bullets
  split?: string; // half layout: grid columns for gallery | text, e.g. "1.15fr 1fr"
  link?: string; // full write-up on the site, e.g. "/projects/ENPH253"
  toc?: string; // short subtitle in the cover's contents list
}
