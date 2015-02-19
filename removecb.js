$(document).ready(function(){

function removeOffendingPost()  {
	// Load in the filters
	chrome.storage.sync.get("blacklist", function(data){
		var filter_keywords = data.blacklist
		
		// For some reason this is null the first time through even though I set it before. Not sure why
		if(filter_keywords == null)
			return

		// Now, find all posts
		var posts = document.querySelectorAll("._5jmm, .timelineUnitContainer")
		//var posts = document.getElementsByClassName("_5jmm");
		for(post = 0; post < posts.length; ++post){
	
			var sectionswithtext = posts[post].querySelectorAll("._52c6, .fsm, ._6mb, ._6lz")
			//var posts = document.getElementsByClassName("fsm");
		
			// For each one, find the words that we want to hide
			for (index = 0; index < sectionswithtext.length; ++index) {
				var found_fkeyword = false;
			
				// See if any of our filter keywords were violated
				for (fkeyword = 0; fkeyword < filter_keywords.length; ++fkeyword){
					//var b = sectionswithtext[index].innerHTML.search(filter_keywords[fkeyword]);
					var c = sectionswithtext[index].innerHTML.toLowerCase().indexOf(filter_keywords[fkeyword]);
					if(c >= 0){
						found_fkeyword = true;
						break;
					}
				}
			
				if(found_fkeyword){
					console.log( "Removed an article from: " + filter_keywords[fkeyword])
					//$(posts[post]).css("background-color", "red");
					posts[post].remove();
					increasePostsRemoved();
				}
			}
		}
	});
}

initializeStorage();
initializePostsRemoved();
// Find all changes to the dom that are in the Facebook Feed Stream
removeOffendingPost();
setInterval(removeOffendingPost, 7000);

});
