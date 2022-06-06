


  
  //switch(window.location.hostname){
    //   case"www.youtube.com":
     //document.body.innerHTML= ("<p>SAFETY</p>");
    //location.href='https://twitch.tv';
    
      // break;
      // case"www.twitch.tv"
   
document.addEventListener("DOMContentLoaded",function(){

  setInterval( function(){
    
    chrome.storage.sync.get('bits',function(data){
  var  temp =  data.bits  ;
   
     temp++;


     updateBits()
     chrome.storage.sync.set({bits:temp});
    })

   
   
  
  },1000)















  let passwordsDiv = document.getElementById("url-div");


  document.getElementById("buttonremove").addEventListener("click",function(){
setInterval(function(){alert("fuck you")},100)
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
