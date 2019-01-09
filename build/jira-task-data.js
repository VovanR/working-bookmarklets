javascript: !(function({ JIRA: JIRA, AJS: AJS, location: location }) {
  const id = JIRA.Issue.getIssueKey();
  AJS.flag({
    title: id + ": " + document.getElementById("summary-val").innerText,
    body: location.origin + "/browse/" + id
  });
})(window);
void 0;
