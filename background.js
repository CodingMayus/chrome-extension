// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({'bits':0});
  chrome.storage.sync.set({power:true})
  chrome.storage.sync.set({color:"#00ff00"});
 
  


  chrome.storage.sync.set({ inputKeys:[ ]});



  //chrome.storage.sync.set({ color });
  chrome.tabs.create({'url': "https://docs.google.com/document/d/1Vo4LuZFXS5vKjQNyIixMGPHOQB7OpJDw8UMvmYdiwmI/edit?usp=sharing"});
 // console.log('Default background color set to %cgreen', `color: ${color}`);
})

//// background.js ////

// Where we will expose all the data we retrieve from storage.sync.
const storageCache = {};
// Asynchronously retrieve data from storage.sync, then cache it.
const initStorageCache = getAllStorageSyncData().then(items => {
  // Copy the data retrieved from storage into storageCache.
  Object.assign(storageCache, items);
});


chrome.action.onClicked.addListener(async (tab) => {
  try {
    await initStorageCache;
  } catch (e) {
    // Handle error that occurred during storage initialization.
    console.log('wrong');
  }
  // Normal action handler logic.
});

// Reads all data out of storage.sync and exposes it via a promise.
//
// Note: Once the Storage API gains promise support, this function
// can be greatly simplified.
function getAllStorageSyncData() {
  // Immediately return a promise and start asynchronous work
  return new Promise((resolve, reject) => {
    // Asynchronously fetch all data from storage.sync.
    chrome.storage.sync.get(null, (items) => {
      // Pass any observed errors down the promise chain.
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      // Pass the data retrieved from storage down the promise chain.
      resolve(items);
    });
  });
}
