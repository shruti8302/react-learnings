async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  //   console.log(data);
  return data;
}
getTodos().then((data) => console.log(data.filter((d) => d.id < 7)));

console.log("Shruti");
