export default function groceriesList() {
  const object = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  return new Map(Object.entries(object));
}
