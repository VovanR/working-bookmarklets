javascript: !(function() {
  const taskRows = document.querySelectorAll(".taskRow");
  taskRows.forEach(rowElement => {
    rowElement
      .querySelectorAll(".workflowStatusIcon")[0]
      .classList.contains("statusColor_violet") &&
      (rowElement.style.opacity = "0.5"),
      (rowElement.querySelectorAll(
        ".task-customer-and-project"
      )[0].style.display = "none");
  }),
    (document.querySelector(
      ".submitTTHead .selectionLeftContainer"
    ).textContent = String(taskRows.length));
})();
void 0;
