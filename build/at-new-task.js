javascript:!function(){let title="",url="";const getDescriptionElement=()=>document.querySelector("#editDescriptionPopupText"),getNameElement=()=>document.querySelector("#createTasksPopup .nameCell.first input");function listener({target:{value:value}}){[title,url]=value.split("\n"),getDescriptionElement().removeEventListener("input",listener),getDescriptionElement().value=url,getNameElement().value=title,document.querySelector("#scbutton").click(),getNameElement().click(),getNameElement().dispatchEvent(new Event("blur")),document.querySelector("#createTasksPopup .components_button").click()}document.querySelector("#addTaskButtonId").click(),setTimeout((()=>{document.querySelector("#descriptionElement").click(),getDescriptionElement().addEventListener("input",listener)}),1e3)}();void(0);