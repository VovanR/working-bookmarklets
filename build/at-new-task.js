javascript:!function(){let title="",url="";const getDescriptionElement=()=>document.querySelector("#editDescriptionPopupText"),getNameElement=()=>document.querySelector("#createTasksPopup .nameCell.first input");document.querySelector("button[class*='containers-EnterTT-ETTTaskPanel-trigger']").click();let interval=setInterval((()=>{const button=document.querySelector("button[class*='containers-EnterTT-ETTTaskPanel-addNew']");function listener({target:{value:value}}){[title,url]=value.split("\n"),getDescriptionElement().removeEventListener("input",listener),getDescriptionElement().value=url,getNameElement().value=title,document.querySelector("#scbutton").click(),getNameElement().click(),getNameElement().dispatchEvent(new Event("blur")),document.querySelector("#createTasksPopup .components_button").click()}button.disabled||(clearInterval(interval),button.click(),setTimeout((()=>{document.querySelector("#descriptionElement").click(),getDescriptionElement().addEventListener("input",listener)}),1e3))}),250)}();void(0);