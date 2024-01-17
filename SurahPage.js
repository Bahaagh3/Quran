function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const surahId = getQueryParam('surah');
let test = new Request('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number='+surahId)
fetch(test)
.then(response => {
    if (!response.ok) {

    }
    return response.json();
  })
.then(data => {


const verses = data["verses"]; 
let parent = document.getElementById("0")
console.log(verses)
for (let i = 0; i<verses.length;i++){
    let content = verses[i]["text_uthmani"]//.replaceAll("","").replaceAll("","").replaceAll("","").replaceAll("","")
    let key  = verses[i]["verse_key"]
    let newDiv = document.createElement("div")
    newDiv.className = "ayah"
    newDiv.textContent= content
    let newInfo = document.createElement("p")
    newInfo.className = "info"
    newInfo.textContent = key
    newDiv.appendChild(newInfo)
    parent.appendChild(newDiv)
}

})
