//alert("HEY GUYS");
//if(window.location.hostname === "www.youtube.com"){
  //  alert("YOU ARE IN YOUTUBE");
//}


async function ready(){
  console.log("Content script loaded!");

  var websitesBlocked = ["www.youtube.com","www.facebook.com","www.coolmathgames.com","www.discord.com","www.instagram.com"];
  var temp =0;
 
  

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showOverlay") {
    //  Create the overlay
      const overlay = document.createElement("div");
      overlay.id = "custom-overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Changed opacity to 0.5 for translucency
      overlay.style.zIndex = "9998";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.color = "white";
      overlay.style.fontSize = "24px";
      overlay.innerText = request.message || "Overlay Content";
      // Append the overlay to the body
      var videos = ["https://www.youtube.com/embed/wnHW6o8WMas?si=Dw6g6sUXreU-WXfe","https://www.youtube.com/embed/mgmVOuLgFB0?si=6_o1A13iZSzTvrHY","https://www.youtube.com/embed/g-jwWYX7Jlo?si=JDER1WE7mq3OqtQz","https://www.youtube.com/embed/g6BtbIiJ_rc?si=SoBSNUd3lEinU4ht" ];
        var temp = Math.floor(Math.random()*videos.length);
      const overlayvideo = document.createElement("iframe");
      overlayvideo.src = videos[temp];
      overlayvideo.style.position = "fixed";
      overlayvideo.style.width = "40%";
      overlayvideo.style.height = "40%";
      overlayvideo.style.zIndex = "9999";
      overlayvideo.style.display = "flex";
      overlayvideo.style.justifyContent = "center";
      overlayvideo.style.alignItems = "center";
      overlayvideo.style.color = "white";
      overlayvideo.style.fontSize = "24px";
      overlayvideo.innerText = request.message || "Overlay Content";
      overlay.appendChild(overlayvideo);
      // Remove overlay on click

      const igotthis = document.createElement("button");  
      igotthis.innerText = "I got this!";
      igotthis.style.position = "absolute";
      igotthis.style.bottom = "5%";
      igotthis.style.left = "50%";
      igotthis.style.transform = "translateX(-50%)";
      igotthis.style.padding = "10px 20px";
      igotthis.style.fontSize = "18px";
      igotthis.style.backgroundColor = "#4CAF50";
      igotthis.style.color = "white";
      igotthis.style.border = "none";
      igotthis.style.borderRadius = "5px";
      igotthis.style.cursor = "pointer";
      igotthis.style.zIndex = "9999";
      overlay.appendChild(igotthis);
      igotthis.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });

      document.body.appendChild(overlay);
  //    alert("poop");
      sendResponse({ status: "Overlay displayed" });
    }
  
  });


await chrome.storage.sync.get('power',function(data){
  var temp = data.power;
  if(temp){
actualBlocker();
  }
  }); 





  

}
const actualBlocker= async () => {
 
  const { inputKeys } = await chrome.storage.sync.get("inputKeys");
  var finder = inputKeys.find(urle => urle.url===window.location.hostname);
  if(finder !== undefined){
    document.body.innerHTML= ("<p>SAFETY</p>")
    window.location = "http://Social-Media-Blocker.github.io/"

  }else{
    
  }
}
if(document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded',ready);
}else{

  // chrome.storage.sync.get('power',function(data){
  //   var temp = data.power;
  //   if(temp){
  //     ready()
  //   }
  // })

ready();

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
