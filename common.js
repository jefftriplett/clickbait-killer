function initializeStorage(callback){
	chrome.storage.sync.get("blacklist", function(data){
		if(data.blacklist == null){
			var defaults = [
				'100percentfedup.com',
				'21stcenturywire.com',
				'70news.wordpress.com',
				'abcnews.com.co',
				'activistpost.com',
				'americannews.com',
				'anonnews.co',
				'beforeitsnews.com',
				'bigamericannews.com',
				'bigpzone.com',
				'buzzfeed.com',
				'buzzpo.com',
				'christwire.org',
				'chronicle.su',
				'civictribune.com',
				'clickhole.com',
				'coasttocoastam.com',
				'collectiveevolution',
				'consciouslifenews.com',
				'conservativeoutfitters.com',
				'countdowntozerotime.com',
				'counterpsyops.com',
				'cracked.com',
				'creambmp.com',
				'dailybuzzlive.com',
				'dailycurrant.com',
				'dcclothesline.com',
				'dcgazette.com',
				'deadspin.com',
				'derfmagazine.com',
				'disclose.tv',
				'distractify.com',
				'drudgereport.com.co',
				'duffleblog.com',
				'duhprogressive.com',
				'embols.com',
				'empire herald',
				'empirenews.com',
				'endingthefed.com',
				'enduringvision.com',
				'fprnradio.com',
				'geoengineeringwatch.org',
				'globalresearch.ca',
				'govtslaves.info',
				'gulagbound.com',
				'hangthebankers.com',
				'humansarefree.com',
				'infowars.com',
				'inquisitor.com ',
				'intellihub.com',
				'jonesreport.com',
				'lewrockwell.com',
				'liberal america',
				'libertymovementradio.com',
				'libertytalk.fm',
				'libertyvideos.org',
				'lifebuzz.com',
				'mediamass.net',
				'megynkelly.us',
				'msnbc.com.co',
				'msnbc.website',
				'nationalreport.net',
				'naturalnews.com',
				'news-hound.com',
				'newsbiscuit.com',
				'newsmutiny.com',
				'newswire-24.com',
				'nodisinfo.com',
				'nowtheendbegins.com',
				'oddcrunch.com',
				'pakalertpress.com',
				'petflow.com',
				'politicalblindspot.com',
				'politicalears.com',
				'prisonplanet.com',
				'prisonplanet.tv',
				'private-eye.co.uk',
				'realfarmacy.com',
				'realnewsrightnow.com',
				'redflagnews.com',
				'rilenews.com',
				'sprotspickle.com',
				'thedailysheeple.com',
				'thenewsnerd.com',
				'thepoliticalinsider.com',
				'therundownlive.com',
				'theuspatriot.com',
				'thinkprogress.org',
				'tpnn.com',
				'truthfrequencyradio.com',
				'twitchy.com',
				'unconfirmedsources.com',
				'upworthy.com',
				'veteranstoday.com',
				'viralnova.com',
				'wakingupwisconsin.com',
				'wideawakeamerica.com',
				'witscience.org',
				'worldtruth.tv',
				'www.cc.com/indecision'
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


