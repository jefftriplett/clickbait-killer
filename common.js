function initializeStorage(){
	chrome.storage.sync.get("blacklist", function(data){
		if(data.blacklist == null){
			var defaults = ['sueddeutsche.de', 'spiegel.de', 'petflow.com', 'upworthy.com', 'lifebuzz.com', 'oddcrunch.com'];

			// Store the default	
			chrome.storage.sync.set({"blacklist": defaults}, function(){});
		}
	});
}
