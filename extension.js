var w=document.getElementById("m1")
var e=document.getElementById("m2")


var n=document.getElementById("print")





e.addEventListener("click" , ()=>{
	
   	var z=document.createElement("li")
   
	if(w.value.length!=0){ 

     z.innerHTML=`<a href=${w.value} target=blank> ${w.value} </a>`
	}

   else{
   	 z.innerHTML=`<a href=${window.location.href} target=blank> ${window.location.href} </a>`
   	}
   	n.append(z)
   	w.value=""
})