(function () {
  const getAddNewTaskDropdownButtonElement = () =>
    document.querySelector(
      "button[class*='containers-EnterTT-ETTTaskPanel-trigger']"
    );

  const getAddNewTaskButtonElement = () =>
    document.querySelector(
      "button[class*='containers-EnterTT-ETTTaskPanel-addNew']"
    );

  const getAddTaskDescriptionButtonElement = () =>
    document.querySelector("#descriptionElement");

  const getDescriptionElement = () =>
    document.querySelector("#editDescriptionPopupText");

  const getNameElement = () =>
    document.querySelector("#createTasksPopup .nameCell.first input");

  const getCreateTaskButtonElement = () =>
    document.querySelector("#createTasksPopup .components_button");

  getAddNewTaskDropdownButtonElement().click();

  const interval = setInterval(() => {
    const button = getAddNewTaskButtonElement();

    if (button.disabled) {
      return;
    }

    clearInterval(interval);
    button.click();

    function listener({ target: { value } }) {
      const [title, url] = value.split("\n");

      getDescriptionElement().removeEventListener("input", listener);

      if (!title || !url) {
        return;
      }

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
  }, 250);
})();
