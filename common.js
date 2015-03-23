function initializeStorage(callback){
	chrome.storage.sync.get("blacklist", function(data){
		if(data.blacklist == null){
			var defaults = ['buzzfeed.com', 
					'buzzpo.com', 
					'petflow.com', 
					'upworthy.com', 
					'lifebuzz.com', 
					'oddcrunch.com',
					'tpnn.com',
					'deadspin.com',
					'cracked.com',
					'viralnova.com',
					'distractify.com',
					'thepoliticalinsider.com',
					];

			// Store the default	
			chrome.storage.sync.set({"blacklist": defaults}, callback);
		}
		else{
			callback();
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

function getCurrentTimeout(callback){
	chrome.storage.sync.get("timeout", function(data){
		if(data.timeout == null){
			// Store the default	
			chrome.storage.sync.set({"timeout": 5}, callback(5));
		}
		else{
			callback(data.timeout);
		}
	});
}

function setAdjustableTimeoutInterval(callback)
{
	// Call the method to do the work
	callback();
	
	getCurrentTimeout(function (timeout) {
		// Wait for the amount of time and then call this function again
		window.setTimeout(function() { setAdjustableTimeoutInterval(callback); }, timeout * 1000);
	});
}


