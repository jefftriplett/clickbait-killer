$(document).ready(function(){
	initialize();

	document.getElementById("addbutton").onclick = addsite;
});

function addsite(){

	chrome.storage.sync.get("blacklist", function(data){
		sites = data.blacklist
		var newsite = $("#newsite").val();
		sites[sites.length] = newsite;
		chrome.storage.sync.set({"blacklist": sites}, function(){});
		addsitetolist(newsite);
	});
}

function initialize(){
	// Do initialization - they have never been here before
	initializeStorage(function() {

		// Now grab them
		chrome.storage.sync.get("blacklist", function(data) {
			sites = data.blacklist
	
			for(site = 0; site < sites.length; site++){
				addsitetolist(sites[site]);
			}
		});

		// Set the totals
		getPostsRemoved(function(count){
			$("#postsremoved").text(count);	
		});
	});
};

function addsitetolist(site){
$("#sitelist").append(
    $("<li>")
        .append(
            $("<span>")
                .text(site))
        .append(
            $("<span>")
                .addClass("helper"))
        .append(
            $("<img>")
                .attr("src", "erase.png")
                .addClass("deleteimg")
		.click(function(){
			var li = $(this).parent();
			var itemtoremove = li.first().text();
			var indextoremove = -1;

			chrome.storage.sync.get("blacklist", function(data) {
			sites = data.blacklist
	
			for(site = 0; site < sites.length; site++){
				if(sites[site] == itemtoremove){
					indextoremove = site;
					break;
				}
			}
			
			if(indextoremove != -1){
				sites.splice(indextoremove, 1);
				chrome.storage.sync.set({"blacklist": sites}, function(){});
				li.remove();
			}
		});			
			
})));

	
}
