const inputValue = document.getElementById("input-value");

inputValue.addEventListener("change", (event) => {

    if(event.target.value === ""){
        return;
    }
  console.log(event.target.value);

  // Create new elements
  const inputRadio = document.createElement("input");
  inputRadio.type = "radio";


  const para = document.createElement("p");
  para.innerHTML = event.target.value;


 // radio checked to para line through
 inputRadio.addEventListener("change", (event) => {
  if(inputRadio.checked){
    para.style.textDecoration = "line-through";
  }else{
    para.style.textDecoration = none;
  }
 })

  const img = document.createElement("img");
  img.src = "https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000";
  img.alt = "delete icon";
  img.style.cursor = "pointer"; 

  // Create list parent and wrap dynamically if not already present
  const listParent = document.createElement("div");
  listParent.className = "list";
  listParent.appendChild(inputRadio);
  listParent.appendChild(para);

  const listWrap = document.createElement("div");
  listWrap.className = "list_wrapper";
  listWrap.appendChild(listParent);
  listWrap.appendChild(img);

  // Append to todo_list
  const todoList = document.querySelector(".todo_list");
  if (todoList) {
    todoList.appendChild(listWrap);
  } else {
    console.error("Todo list container not found!");
  }

  // Add delete functionality
  img.addEventListener("click", () => {
    listWrap.remove();
  });
});
