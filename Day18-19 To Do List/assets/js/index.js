const list = document.querySelector(".taskList");
const submit = document.querySelector(".submit");
const inputTask = document.querySelector(".task");

const createTask = (value) => {
    const elementLi = document.createElement("li");
    const contentLi = document.createTextNode(value);
    elementLi.appendChild(contentLi);
    elementLi.appendChild(createDeleteBtn());
    list.appendChild(elementLi);
    inputTask.value = "";
};

const createDeleteBtn = () => {
    const elementBtn = document.createElement("button");
    elementBtn.appendChild(document.createTextNode("X"));
    elementBtn.classList.add("remove");
    return elementBtn;
};


document.addEventListener("click", (e) => {
    const elementClick = e.target;
    console.log(elementClick.tagName);

    if (elementClick.classList.contains("submit")) {
        const value = inputTask.value;
        const valueLong = value.length;
        if (valueLong > 0) createTask(value);
    };
    if (elementClick.tagName === "LI") {
        elementClick.classList.toggle("complete");
    }
    if (elementClick.classList.contains("remove")) {
        const elementDelete = elementClick.parentNode;
        list.removeChild(elementDelete);
    }
});