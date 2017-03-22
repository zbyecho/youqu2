var lysScxia=document.querySelectorAll(".lys_scxia");
var lysScmask=document.querySelector(".lys_scmask");
var lysScmaskBox=document.querySelector(".lys_scmask_box");
var lysScE=document.querySelector(".lys_scE");
console.log(lysScE.backgroundurl)
for (var i=0;i<lysScxia.length;i++){
	lysScxia[i].addEventListener("touchend",function(e){
		lysScmask.style.transition="left 1s"
		lysScmaskBox.style.transition="left 1s"
		lysScmask.style.left="0px";
		lysScmaskBox.style.left="0px";
		// lysScmask.style.display="block";
	})
}
lysScmask.addEventListener("touchend",function(e){
	lysScmask.style.left="-100%";
	lysScmaskBox.style.left="-100%"
})