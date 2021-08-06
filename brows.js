let useragent=navigator.userAgent;
let browser;
if(useragent.match(/edg/i)){
    browser="edge";
}
else if(useragent.match(/safari/i)){
    browser="safari";
}
else if(useragent.match(/chromium|chrome|crios/i)){
    browser="chrome";
}
else if(useragent.match(/firefox|fxios/i)){
    browser="firefox";
}
else if(useragent.match(/opr/i)){
    browser="opera";
}
else{
    alert("other broaser");
}

console.log(browser);
const logo=document.querySelector(`.logos .${browser}`);
console.log(logo);
if(logo!=""){
    logo.style.opacity="1";
}