


  
  //switch(window.location.hostname){
    //   case"www.youtube.com":
     //document.body.innerHTML= ("<p>SAFETY</p>");
    //location.href='https://twitch.tv';
    
      // break;
      // case"www.twitch.tv"
  
      document.addEventListener("DOMContentLoaded",function(){

       
      
     // alert("hello!");
      
      let minaccumulated = document.getElementById("bitnumber");
      chrome.storage.sync.get("bits",function(data){
        var total = data.bits;
        minaccumulated.innerText=total;
      })

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
    
      
      
      
      
     
        
        
        
        
        const ClearUrlBtn = document.getElementById("clear-url-btn");
      
        
         
          ClearUrlBtn.addEventListener("click", () => {
            chrome.storage.sync.set({ "InputKeys": [] });
            renderWebsites();
        })
        const resetBtn = document.getElementById("reset-btn");
        resetBtn.addEventListener("click",function(){

          chrome.storage.sync.set({ "inputKeys":[{name:"Youtube",url:"www.youtube.com"},
          {name:"Facebook",url:"www.facebook.com"},
        {name:"Cool Math Games",url:"www.coolmathgames.com"},
        {name:"Discord",url:"www.discord.com"},
        {name:"Instagram",url:"www.instagram.com"}]});
        renderWebsites();
        })
        
        document.getElementById('Motivation').addEventListener('click',function(){
          
var arre = ["It always seems impossible until it's done.","How long should you try? Until. ","Don't give up because things are hard, but work harder, when you think of giving up.", "It is not wanting to win that makes you a winner; it is refusing to fail.","When you are going through hell, keep on going. Never never never give up.","Many of life's failures are people who did not realize how close they were to success when they gave up.","Improvise.  Adapt.  Overcome","When someone tells you that you can't do something, perhaps you should consider that they are only telling you what they can't do.","There is no failure except in no longer trying.","The struggle you're in today is developing the strength you need for tomorrow. Don’t give up.","Genius is 1% inspiration and 99% perspiration.","Your future self is watching you."]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

alert( arre[getRandomInt(0,9)]); 



        })
        
        })
      
       // addBlocked(input);
        
        
           
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
        chrome.storage.set({"inputKeys":inputKeys});
      }
    })
renderWebsites();
})
    
      function renderWebsites(){

          let urlsDiv= document.getElementById('url-div');
          urlsDiv.innerHTML="";
          chrome.storage.sync.get("inputKeys",function(data){
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
            deleteBtn.addEventListener("click", function() {
     
              inputarr = inputarr.filter(item => item.url !== website.url);

              chrome.storage.sync.set({ "inputKeys": inputarr });
             renderWebsites();       
          })
        }

      })

    }


        
      

      
