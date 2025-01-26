


  
  //switch(window.location.hostname){
    //   case"www.youtube.com":
     //document.body.innerHTML= ("<p>SAFETY</p>");
    //location.href='https://twitch.tv';
    
      // break;
      // case"www.twitch.tv"
  



      document.addEventListener("DOMContentLoaded",function(){

       
      
     // alert("hello!");
      

      
    
      
      
      
      
        // const Video = document.getElementById('video');
        // Video.addEventListener("click",async function(){
        //     var arree = ["https://www.youtube.com/watch?v=mgmVOuLgFB0",
        //       "https://www.youtube.com/watch?v=g6BtbIiJ_rc",
        //       "https://www.youtube.com/watch?v=g-jwWYX7Jlo",
        //       "https://www.youtube.com/watch?v=wnHW6o8WMas"];
        //       alert("Enjoy your video!");
        //       document.innerHTML = "";

        // });

        renderWebsites();
  
        })
      
       // addBlocked(input);
       let passwordsDiv = document.getElementById("url-div");
       document.getElementById("onoff").addEventListener("click",function(){
         chrome.storage.sync.get("power",function(data){
           var powerbol = data.power;
         console.log(powerbol);

           if(powerbol){
             powerbol = false;
             document.body.style.backgroundColor = "#ff0000";
           }else{
             powerbol = true;
             document.body.style.backgroundColor= "#00ff00";
             chrome.action.setBadgeText({
               text: "OFF",
             }); 
           }
       
       chrome.storage.sync.set({"power":powerbol})
         })
       
       })
  
       const Video = document.getElementById("overlay-btn");

       Video.addEventListener("click", function () {
         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
           const activeTab = tabs[0];
           if (!activeTab) {
             console.error("No active tab found.");
             return;
           }
       
           // Inject the content script if not loaded
           chrome.scripting.executeScript(
             {
               target: { tabId: activeTab.id },
               files: ["./Content.js"]
             },
             () => {
               if (chrome.runtime.lastError) {
                alert("Cannot create overlay on this page.  Please try on a different page! ");
                 console.error("Error injecting content script:", chrome.runtime.lastError.message);
               } else {
                 // Send the message after injecting the content script
                 chrome.tabs.sendMessage(
                   activeTab.id,
                   { action: "showOverlay", message: "Hello from MiliBLOCK!" },
                   (response) => {
                     if (chrome.runtime.lastError) {
                       console.error("Error sending message:", chrome.runtime.lastError.message);
                     } else {
                       console.log("Response from content script:", response);
                     }
                   }
                 );
               }
             }
           );
         });
       });
       
       const Expander = document.getElementById('expand');
       Expander.addEventListener("click",async ()=>{

         await chrome.storage.sync.get("hide",async function(data){
           chrome.storage.sync.set({"hide":!data.hide});
           // alert(data.hide);
           renderWebsites();
         })
           

       })

       const ClearUrlBtn = document.getElementById("clear-url-btn");
      
        
         
       ClearUrlBtn.addEventListener("click", async () => {
         await chrome.storage.sync.set({ "inputKeys": [] });
         renderWebsites();
       })
     const resetBtn = document.getElementById("reset-btn");
     resetBtn.addEventListener("click", async function(){

     await  chrome.storage.sync.set({ "inputKeys":[{name:"Youtube",url:"www.youtube.com"},
       {name:"Facebook",url:"www.facebook.com"},
     {name:"Cool Math Games",url:"www.coolmathgames.com"},
     {name:"Discord",url:"www.discord.com"},
     {name:"Instagram",url:"www.instagram.com"}]});
     await chrome.storage.sync.set({"hide":true});
     renderWebsites();
     })
     
     document.getElementById('Motivation').addEventListener('click',function(){
       
var arre = ["It always seems impossible until it's done.","How long should you try? Until. ","Don't give up because things are hard, but work harder, when you think of giving up.", "It is not wanting to win that makes you a winner; it is refusing to fail.","When you are going through hell, keep on going. Never never never give up.","Many of life's failures are people who did not realize how close they were to success when they gave up.","Improvise.  Adapt.  Overcome","When someone tells you that you can't do something, perhaps you should consider that they are only telling you what they can't do.","There is no failure except in no longer trying.","The struggle you're in today is developing the strength you need for tomorrow. Don’t give up.","Genius is 1% inspiration and 99% perspiration.","Your future self is watching you.","Slay the dragon in his lair before he comes to your village.","The same boiling water that softens the potato hardens the egg.","It takes courage to grow up and become who you really are."," The journey of a thousand miles begins with one step.","If you can’t fly, then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do, you have to keep moving forward.","Your biggest failure is the thing you dreamed of contributing but didn't find the guts to do.","Work hard in silence and let success be your noise.","If it’s important, you’ll find a way. If it’s not, you’ll find an excuse.","Don’t watch the clock; do what it does. Keep going.","Push yourself, because no one else is going to do it for you.","Nothing in this world is worth having or worth doing unless it means effort, pain, difficulty.","Winners embrace hard work. They love the discipline of it, the trade-off they’re making to win. Losers, on the other hand, see it as a punishment. And that’s the difference."]

 min =0;
 max = arre.length;
var rand = Math.floor(Math.random() * (max - min) + min); 


alert( arre[rand]); 



     })
     
           
        //}
        
chrome.storage.sync.get("inputKeys",function(data){
  const inputKeys = data.inputKeys;
    document.getElementById("buttonadd").addEventListener("click",function(){
      var inputName = prompt("Name of the website?  This referred to for the website.","input here");
      var input = prompt("Domain name/Website link to block","input here");
      var linkCheck = inputKeys.find(inputs=>inputs.url===input);
      var nameCheck = inputKeys.find(names=>names.name===inputName);
      if(nameCheck!== undefined){
        alert("You already have this type of name saved.  To keep it organizd, it is suggested for distinct names.");
      }
      if(linkCheck != undefined){
        alert("You already saved this link.");
      }

      else{
        inputKeys.push({"name":inputName,"url":input});
        chrome.storage.sync.set({"inputKeys":inputKeys});
        renderWebsites();
      }
    })
renderWebsites();
})
    
    async function renderWebsites(){


      await chrome.storage.sync.get("hide",async function(data){
        if(data.hide){
          let urlsDiv= document.getElementById('url-div');
          urlsDiv.innerHTML="";
          await chrome.storage.sync.get("inputKeys",function(data){
            let inputarr = data.inputKeys;
        for(const website of inputarr){
        //  alert(inputarr[i].url);
            const blockedname= document.createElement("span");
            blockedname.innerText = " "+website.name+"\n";
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            urlsDiv.appendChild(deleteBtn);
            urlsDiv.appendChild(blockedname);
        

          //  alert(inputarr[i].url);
            deleteBtn.addEventListener("click", async function() {
     
              inputarr = inputarr.filter(item => item.url !== website.url);

              await chrome.storage.sync.set({ "inputKeys": inputarr });
             renderWebsites();       
          })
        }
      
      })

        }else{
          let urlsDiv= document.getElementById('url-div');
          urlsDiv.innerHTML = "";
        }
      
      });
       

    }


        
      

      