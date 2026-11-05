// The gallery is "a day in twelve frames": one photo per two hours.
// file: name of the image in src/assets/gallery/
// Frames are shown in this order, starting at 02:00 and ending at midnight.
export interface Frame {
  file: string;
  hour: number;
  place: string;
  caption: string;
  credit?: string;
}

export const frames: Frame[] = [
  { file: 'halfmoon.jpg', hour: 2, place: 'Sanya, China', caption: 'Half moon' },
  { file: 'aurora.jpg', hour: 4, place: 'Alaska, USA', caption: 'The aurora near Fairbanks' },
  { file: 'kirishima.jpg', hour: 6, place: 'Kagoshima, Japan', caption: 'Kirishima Jingu in a fog' },
  { file: 'rabat.jpg', hour: 8, place: 'Rabat, Morocco', caption: 'A cat in the medina' },
  { file: 'national_gallery.jpg', hour: 10, place: 'Washington, D.C., USA', caption: 'Wisteria at the National Gallery of Art' },
  { file: 'untersberg.jpg', hour: 12, place: 'Hallein, Austria', caption: 'Rest at the Untersberg', credit: 'Wang Ke' },
  { file: 'budapest.jpg', hour: 14, place: 'Budapest, Hungary', caption: "St. Stephen's Basilica (great goulash nearby)" },
  { file: 'Boston.jpg', hour: 16, place: 'Boston, USA', caption: 'Autumn colors under the Back Bay skyline' },
  { file: 'carnuntum.jpg', hour: 18, place: 'Carnuntum, SPQR', caption: 'Heathen’s Gate' },
  { file: 'jhu.jpg', hour: 20, place: 'Baltimore, USA', caption: 'Gilman Hall at dusk, Johns Hopkins' },
  { file: 'kyoto_long.jpg', hour: 22, place: 'Kyoto, Japan', caption: 'Keage Incline' },
  { file: 'new_york.jpg', hour: 0, place: 'New York, USA', caption: 'Lower Manhattan across the Hudson' },
];
