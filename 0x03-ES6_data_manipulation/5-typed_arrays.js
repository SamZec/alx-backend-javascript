export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if ((view.byteLength - 1) < position) {
    throw Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
