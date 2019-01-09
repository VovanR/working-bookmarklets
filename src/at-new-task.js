(function() {
  document.getElementById("addTasksLink").dispatchEvent(new Event("click"));

  setTimeout(function() {
    document
      .getElementById("descriptionElement")
      .dispatchEvent(new Event("click"));
  }, 1000);
})();
