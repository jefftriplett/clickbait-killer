$(document).ready(function(){
	initialize();

	document.getElementById("addbutton").onclick = addsite;
});

function addsite(){

	chrome.storage.sync.get("blacklist", function(data){
		sites = data.blacklist
		var newsite = $("#newsite").val();
		sites[sites.length] = newsite;
		alert("test: " + newsite);
		chrome.storage.sync.set({"blacklist": sites}, function(){});
		$("#sitelist").append("<p>" + newsite + "<p>");
	});
}

function initialize(){
	// Do initialization - they have never been here before
	initializeStorage();

	// Now grab them
	chrome.storage.sync.get("blacklist", function(data) {
		sites = data.blacklist
	
		for(site = 0; site < sites.length; site++){
			$("#sitelist").append("<p>" + sites[site] + "</p>");
		}
		
	});
};
