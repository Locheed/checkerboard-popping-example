const container = document.querySelector("div");

for (i = 0; i <= 350; i++) {
  const box = document.createElement("div");
  const att = document.createAttribute("class");
  i % 2 === 0 ? (att.value = "box white") : (att.value = "box black");
  box.setAttributeNode(att);
  const textNode = document.createTextNode(i);
  box.appendChild(textNode);

  container.appendChild(box);
  box.onclick = () => {
    att.value = "pop";
  };
}
