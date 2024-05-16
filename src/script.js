function generateList(array) {
  const ul = document.createElement("ul");

  array.forEach((item) => {
    const li = document.createElement("li");

    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      li.textContent = item;
    }

    ul.appendChild(li);
  });

  return ul;
}

document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("listContainer");

  const data1 = [1, 2, 3];
  const data2 = [1, 2, [1.1, 1.2, 1.3], 3];

  listContainer.appendChild(generateList(data1));
  listContainer.appendChild(generateList(data2));
});
