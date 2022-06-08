


  
  //switch(window.location.hostname){
    //   case"www.youtube.com":
     //document.body.innerHTML= ("<p>SAFETY</p>");
    //location.href='https://twitch.tv';
    
      // break;
      // case"www.twitch.tv"
      chrome.storage.sync.get('power',function(data){
        var temp = data.power;
        if(temp){
          setInterval( function(){
                  
            chrome.storage.sync.get('bits',function(data){
          var  temp =  data.bits  ;
           
             temp++;
        
        
             updateBits()
             chrome.storage.sync.set({bits:temp});
            })
        
           
           
          
          },1000)
                
          
          
        
        }
               
              })   
      document.addEventListener("DOMContentLoaded",function(){

       
      
      
      
      

        let passwordsDiv = document.getElementById("url-div");
        document.getElementById('onoff').addEventListener("click",function(){
          chrome.storage.sync.get(['power'],function(data){
            var powerbol = data.power;

            if(powerbol){
              powerbol = false;
              document.body.style.backgroundColor = "#ff0000";
            }else{
              powerbol = true;
              document.body.style.backgroundColor= "#00ff00";
            }
        
        chrome.storage.sync.set({power:powerbol})
          })
        
        })
    
      
      
      
      
     
        
        
        
        
        const clearPasswordsBtn = document.getElementById("clear-url-btn");
      
        
          getUrls();
          SaveURL();
          clearPasswordsBtn.addEventListener("click", () => {
            chrome.storage.sync.set({ passwords: [] });
            passwordsDiv.remove();
            passwordsDiv = document.createElement("div");
            document.body.appendChild(passwordsDiv);
        })
        
        document.getElementById('Motivation').addEventListener('click',function(){
          
var arre = ['It always seems impossible until it’s done.',"How long should you try? Until. ","Don’t give up because things are hard, but work harder, when you think of giving up.", "It is not wanting to win that makes you a winner; it is refusing to fail.","“When you are going through hell, keep on going. Never never never give up.","Many of life’s failures are people who did not realize how close they were to success when they gave up.","Improvise.  Adapt.  Overcome","When someone tells you that you can’t do something, perhaps you should consider that they are only telling you what they can’t do.","There is no failure except in no longer trying.","The struggle you’re in today is developing the strength you need for tomorrow. Don’t give up.","Genius is 1% inspiration and 99% perspiration."]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

alert( arre[getRandomInt(0,9)]); 



        })


        document.getElementById('leaderboard').addEventListener("click",async()=>{
         location.href = "https://docs.google.com/document/d/1w-j-6NEmQsVvNsJ56i2XRa-zKlWFTG0-JuZkMrQRjCk/edit?usp=sharing";
        })
        
        })
      
       // addBlocked(input);
        
        
           
        //}
        
        
        
        const SaveURL= async () => {
       
          const { inputKeys } = await chrome.storage.sync.get("inputKeys");
         
          document.getElementById("buttonadd").addEventListener("click",function(){
           var inputName = prompt("Name of the website to block?","input here")
             var input=  prompt("Domain name to block","input here");
             var inputCheck = inputKeys.find(inputs=>inputs.url===input)
             if(inputCheck!== undefined){
               alert("you have already saved this link")
               console.log(inputKeys[0]);
             }else{
             inputKeys.push({ "name" : inputName, url : input });
             console.log(inputName, input);
             chrome.storage.sync.set({ inputKeys});
             getUrls();
            
          // inputkeys.push(input);
          
             }
        })
        
        
        }
      
        
       
        const getUrls = async () => {
          let urlsDiv= document.getElementById('url-div');
          const { inputKeys} = await chrome.storage.sync.get("inputKeys");
          inputKeys.forEach(urle => {
              const linkEl = document.createElement("a");
             
              linkEl.href = urle.url;
              linkEl.innerText = urle.url;
              const deleteBtn = document.createElement("button");
              deleteBtn.innerText = "Delete";
              urlsDiv.appendChild(linkEl);
              urlsDiv.appendChild(deleteBtn);
              
              
          
              
              deleteBtn.addEventListener("click", () => {
                  const updatedurls = inputKeys.filter(pwd => pwd !== urle);
                  chrome.storage.sync.set({ inputKeys: updatedurls });
      
                  linkEl.remove();
                  deleteBtn.remove();            
              })
          })
      }
      

      function updateBits(){
        chrome.storage.sync.get('bits',function(value){
          document.getElementById('bitnumber').innerText = value.bits;
        })
      
      }
