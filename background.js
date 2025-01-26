// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({"bits":0});
  chrome.storage.sync.set({"power":true});
  chrome.storage.sync.set({"hide":true});
  chrome.storage.sync.set({color:"#00ff00"});
  chrome.storage.sync.set({ "inputKeys":[{name:"Youtube",url:"www.youtube.com"},
  {name:"Facebook",url:"www.facebook.com"},
{name:"Cool Math Games",url:"www.coolmathgames.com"},
{name:"Discord",url:"www.discord.com"},
{name:"Instagram",url:"www.instagram.com"}]});
  //chrome.storage.sync.set({ color });
  //chrome.tabs.create({'url': "https://docs.google.com/document/d/1Vo4LuZFXS5vKjQNyIixMGPHOQB7OpJDw8UMvmYdiwmI/edit?usp=sharing"});
 // console.log('Default background color set to %cgreen', `color: ${color}`);
 


})



// setInterval(function(){
  chrome.storage.onChanged.addListener(function(changes, areaName) {
    // Check if 'power' is present in the changes object
    if ("power" in changes) {
      chrome.storage.sync.get("power", function(data) {
        if (data.power) {
          chrome.action.setBadgeText({
            text: "ON"
          });
        } else {
          chrome.action.setBadgeText({
            text: "OFF"
          });
        }
      });
    }
  });

  // setInterval(function(){
  //   chrome.storage.sync.get("bits",function(data){
  //     var total = data.bits;
  //     total++;
  //   chrome.storage.sync.set({"bits":total});
  //   })
  // },60000)  
// },100)