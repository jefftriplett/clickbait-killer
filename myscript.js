	
var filter_keywords = ['petflow.com', 'upworthy.com', 'lifebuzz.com', 'oddcrunch.com']
		
function removeOffendingPost()  {
	// Now, find all posts
	var posts = document.querySelectorAll("._5jmm, .timelineUnitContainer")
	//var posts = document.getElementsByClassName("_5jmm");
	for(post = 0; post < posts.length; ++post){
	
		var sectionswithtext = posts[post].querySelectorAll(".fsm, ._6mb, ._6lz")
		//var posts = document.getElementsByClassName("fsm");
		
		// For each one, find the words that we want to hide
		for (index = 0; index < sectionswithtext.length; ++index) {
			var found_fkeyword = false;
			
			// See if any of our filter keywords were violated
			for (fkeyword = 0; fkeyword < filter_keywords.length; ++fkeyword){
				var b = sectionswithtext[index].innerHTML.search(filter_keywords[fkeyword]);
			
				if( b > 0){
					//alert("found " + filter_keywords[fkeyword])
					found_fkeyword = true;
					break;
				}
			}
			
			if(found_fkeyword){
				console.log( "Removed an article from: " + filter_keywords[fkeyword])
				posts[post].remove();
			}
		}
	
	}
	
	
	
}

// Find all changes to the dom that are in the Facebook Feed Stream
$('div[id^="feed_stream_"]').bind("DOMSubtreeModified", removeOffendingPost);
$('._4_7u').bind("DOMSubtreeModified", removeOffendingPost);
$(document.documentElement).bind("DOMSubtreeModified", removeOffendingPost);
