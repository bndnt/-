document.getElementById('mm').onclick=function(){
if(( document.querySelector(".first").classList.contains("second"))===true){
document.getElementById('mm').classList.remove("second");
}
else
    document.getElementById('mm').classList.add("second");}