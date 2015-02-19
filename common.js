function initializeStorage(){
	chrome.storage.sync.get("blacklist", function(data){
		if(data.blacklist == null){
			var defaults = ['sueddeutsche.de', 'spiegel.de', 'petflow.com', 'upworthy.com', 'lifebuzz.com', 'oddcrunch.com'];

			// Store the default	
			chrome.storage.sync.set({"blacklist": defaults}, function(){});
		}
	});
}

function initializePostsRemoved(){
	chrome.storage.sync.get("postsremoved", function(data){
		if(data.postsremoved == null){
			// Store the default	
			chrome.storage.sync.set({"postsremoved": 0}, function(){});
		}
	});
}

var lock = 0;

function increasePostsRemoved(){
	chrome.storage.sync.get("postsremoved", function(data){
		if(data.postsremoved == null){
			// Store the default	
			chrome.storage.sync.set({"postsremoved": 0}, function(){ lock = 0;});
		}
		else {
			var a = data.postsremoved + 1;
			chrome.storage.sync.set({"postsremoved":a}, function(){ lock = 0;});
		}
	});
}

function getPostsRemoved(callback){
	chrome.storage.sync.get("postsremoved", function(data){
		if(data.postsremoved == null){
			// Store the default	
			chrome.storage.sync.set({"postsremoved": 0}, callback(0));
		}
		else{
			callback(data.postsremoved);
		}
	});

}


