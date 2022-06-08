//alert("HEY GUYS");
//if(window.location.hostname === "www.youtube.com"){
  //  alert("YOU ARE IN YOUTUBE");
//}



function ready(){
 
  var websitesBlocked = ["www.youtube.com","www.facebook.com","www.coolmathgames.com","www.discord.com","www.instagram.com"];
  var temp =0;
 
  



actualBlocker();



if(websitesBlocked.includes(window.location.hostname)){
  document.body.innerHTML= ("<p>SAFETY</p>")
  window.location = "http://codingmayus.github.io/"

}
  

}
const actualBlocker= async () => {
 
  const { inputKeys } = await chrome.storage.sync.get("inputKeys");
  var finder = inputKeys.find(urle => urle.url===window.location.hostname);
  if(finder !== undefined){
    document.body.innerHTML= ("<p>SAFETY</p>")
    window.location = "http://codingmayus.github.io/"

  }else{
    
  }
}
if(document.readyState=='loading'){
  document.addEventListener('DOMCContentLoaded',ready)
}else{

  chrome.storage.sync.get('power',function(data){
    var temp = data.power;
    if(temp){
      ready()
    }
  })



}


/*function bitIncrease(){

 

  temp++; 
  chrome.storage.sync.set({bits:temp})

chrome.storage.sync.get(['bits'],function(data){
  document.getElementById('bitnumber').innerText=data.bits;
});



}

*/



//-->
  

//the typical input thing, after a few hours, was discovered to b actually not abel to work most likeyl
//because it was hard to have a fulyl functional input using a pop up, i feel like 
//this eventlistener method is mroe for real html web pages.
