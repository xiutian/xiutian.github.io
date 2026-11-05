// The gallery is "a day in twelve frames": one photo per two hours.
// file: name of the image in src/assets/gallery/
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
  { file: 'himeji_castle.jpg', hour: 8, place: 'Himeji, Japan', caption: 'Himeji Castle and cherry blossom' },
  { file: 'sanya.jpg', hour: 10, place: 'Sanya, China', caption: 'Crepuscular rays seen from Luhuitou' },
  { file: 'untersberg.jpg', hour: 12, place: 'Hallein, Austria', caption: 'Rest at the Untersberg', credit: 'Wang Ke' },
  { file: 'budapest.jpg', hour: 14, place: 'Budapest, Hungary', caption: "St. Stephen's Basilica (great goulash nearby)" },
  { file: 'carnuntum.jpg', hour: 16, place: 'Carnuntum, SPQR', caption: 'Heathen’s Gate' },
  { file: 'gugong.jpg', hour: 18, place: 'Beijing, China', caption: 'A sunset in the Forbidden City' },
  { file: 'kyoto_long.jpg', hour: 20, place: 'Kyoto, Japan', caption: 'Keage Incline' },
  { file: 'sasebo.jpg', hour: 22, place: 'Sasebo, Japan', caption: 'A night view of Sasebo port' },
  { file: 'table_lamp.jpg', hour: 0, place: 'Chengdu, China', caption: 'My table lamp at home' },
];
