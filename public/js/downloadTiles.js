
$('body').append('<a id="download">Download as image</a>')
function downloadCanvas(link, filename) {
    link.href = href;
    link.download = filename;
}

for(var j in scene.layerCanvas){

var href;
var cont = scene.layerCanvas[j]




	for(var i in cont){
		href = cont[i].canvas.toDataURL();
		document.getElementById('download').addEventListener('click', function() {
	    downloadCanvas(this, j + i + '.png');
	}, false);
		$('#download')[0].click();

	}
	


}





/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
