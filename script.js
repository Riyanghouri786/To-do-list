let inputField = document.getElementById("value");
let listBox = document.getElementById("list-box");

let lists = [];

function addList() {
  if (inputField.value != "") {
    if (inputField.value === "How make you")
      alert("My Devoloper is Riyan Ghouri.");
    else {
      lists.push(inputField.value);
      render(lists);
      inputField.value = "";
    }
  } else {
    alert("Please enter some Text.");
  }
}
function render(page) {
  listBox.innerHTML = "";
  page.forEach((task) => {
    listBox.innerHTML += `
        <li class="list">
          <span style="display: flex; gap: 5px"
            ><div class="checkbox"><input  type="checkbox" /></div>
            <p>${task}</p></span
          >
          <button onclick="remove()" class="delete">X</button>
        </li>
        `;
  });
}
function remove(index) {
  lists.splice(index, 1);
  render(lists);
}
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addList();
  }
});
