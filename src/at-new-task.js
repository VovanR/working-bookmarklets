(function() {
  let title = "";
  let url = "";

  const getAddNewTaskButtonElement = () =>
    document.querySelector("#addTaskButtonId");

  const getAddTaskDescriptionButtonElement = () =>
    document.querySelector("#descriptionElement");

  const getDescriptionElement = () =>
    document.querySelector("#editDescriptionPopupText");

  const getNameElement = () =>
    document.querySelector("#createTasksPopup .nameCell.first input");

  const getCreateTaskButtonElement = () =>
    document.querySelector("#createTasksPopup .components_button");

  getAddNewTaskButtonElement().click();

  function listener({ target: { value } }) {
    [title, url] = value.split("\n");

    getDescriptionElement().removeEventListener("input", listener);
    getDescriptionElement().value = url;

    getNameElement().value = title;

    document.querySelector("#scbutton").click();

    getNameElement().click();
    getNameElement().dispatchEvent(new Event("blur"));

    getCreateTaskButtonElement().click();
  }

  setTimeout(() => {
    getAddTaskDescriptionButtonElement().click();

    getDescriptionElement().addEventListener("input", listener);
  }, 1000);
})();
