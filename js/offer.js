var offerModal = document.getElementById("offerModal");
var modallink = document.getElementsByClassName("modallink");
var closeBtn = document.getElementsByClassName("closeBtn");

modallink.addEventListener('click', openOffer);

const openOffer=()=>{
    offerModal.style.display ='block';
}
