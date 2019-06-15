if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/public/service-worker.js');
}

(function(arr,i,name) {
    while(name = arr[i++]) {
      Math["$"+name] = Function("a","b","return Math."+name+"(a*(b=Math.pow(10,b||0)))/b");
    }
})(["floor","ceil","round"],0);

var valueToEval = "";

function newG() { valueToEval = "G"; }
function newM() { valueToEval = "M"; }

function convert() {
	switch(valueToEval) {
		case "G":
			convertToM();
			break;
		
		case "M":
			convertToG();
			break;
		
		default:
			break;
	}
}

function convertToM() {
    grams = document.getElementById('grams');
    mmols = document.getElementById('mmols');

    mmols.value = Math.$ceil(grams.value * 5.5, 2);
}

function convertToG() {
    grams = document.getElementById('grams');
    mmols = document.getElementById('mmols');

    grams.value = Math.$ceil(mmols.value * 0.18, 2);
}

window.setInterval(convert, 10);