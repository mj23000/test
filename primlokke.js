var z=0;
var prim=1;

function primUdregn(){
	for(var j=1;j<=50000;j++){
		prim=1;	
		for(var i=2;i<j;i++){
			z=j%i;
			if (z==0)
				prim=0;
		}
		if (prim==1)
			document.getElementById("primsvar").innerHTML += j+" ";
	}
}
