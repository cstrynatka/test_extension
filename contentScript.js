var regexRobFord = /Rob Ford/;
var regexFord = /Ford/;

function isRobFordArticle() {
	return regexRobFord.test(document.title) || 
		(regexFord.test(document.title) && regexRobFord.test(document.body.textContent));
}

window.onbeforeunload = function(e) {
	//alert("unload");
    if ( isRobFordArticle() ) {
        chrome.extension.sendMessage({action: "stop"});
    }
}

document.onreadystatechange = function(e) {
	//alert("readyState");
    if (document.readyState === 'complete') {
		if ( isRobFordArticle() ) {
			chrome.extension.sendMessage({action: "play"});
		}
    }
};

document.onload = function(e) {
	//alert("readyState");
	if ( isRobFordArticle() ) {
		chrome.extension.sendMessage({action: "play"});
	}
};
