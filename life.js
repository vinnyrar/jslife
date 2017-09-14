ins = document.getElementsByTagName('input');
var c = 0;
var y = 0;
var h1 = document.createElement("h1");
h1.innerText = 0;
document.body.appendChild(h1);

timer = function(){
	if(ins[c].checked){
		c+=365;
		h1.innerText = ++y;
	}
}
setInterval(timer, 10);
