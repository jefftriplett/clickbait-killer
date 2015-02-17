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
		initialize();
	});
}

function initialize(){

	// Do initialization - they have never been here befor
	var sites = null;

		chrome.storage.sync.get("blacklist", function(data){
			if(data.blacklist == null){
			var defaults = ['sueddeutsche.de', 'spiegel.de', 'petflow.com', 'upworthy.com', 'lifebuzz.com', 'oddcrunch.com'];
	
			// Store the default	
			chrome.storage.sync.set({"blacklist": defaults}, function(){});
		}
	});

	

	// Now grab them
	chrome.storage.sync.get("blacklist", function(data){
		sites = data.blacklist
	
		for(site = 0; site < sites.length; site++){
			$("#sitelist").append("<p>" + sites[site] + "</p>");
		}
		
	});
};
