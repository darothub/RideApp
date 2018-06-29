var myOffer = document.getElementById("myoffer");
var closeBtn = document.getElementsByClassName("close")[0];
var cancelBtn = document.getElementById("cancel");

const openOffer=()=>{
    myOffer.style.display = "block"

}

closeBtn.addEventListener('click', function(){
    myOffer.style.display = "none";
})

cancelBtn.addEventListener('click', function(){
    myOffer.style.display = "none";
})
/*cancelBtn.onclick = function() {
    myOffer.style.display = "none";
}*/


