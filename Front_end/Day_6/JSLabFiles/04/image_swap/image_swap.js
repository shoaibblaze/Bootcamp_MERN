var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode = $("image");
    
    var imageLinks = listNode.getElementsByTagName("a");
    var i, linkNode, image;
    for(i=0; i< imageLinks.length; i++){
        linkNode =imageLinks[i];
        linkNode.onclick = function(evt){
            var link =this;
            imageNode.src = link.getAttribute("href");
            captionNode.firstChild.nodeValue = link.getAttribute("title");
            if(evt.preventDefault){
                evt.preventDefault();
            }
        }
    }
    image= new Image()
    image.src = linkNode.getAttribute("href");
    $("first_link").focus();
}


