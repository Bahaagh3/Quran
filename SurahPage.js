function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
let surahId = getQueryParam('surah');
if (surahId == null){
    surahId ="1"
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
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
for (let i = 0; i<verses.length;i++){
    let content = verses[i]["text_uthmani"]
    let key  = verses[i]["verse_key"]
    let newDiv = document.createElement("div")
    newDiv.className = "ayah"
    newDiv.textContent= content
    let newInfo = document.createElement("p")
    newInfo.className = "ayahinfo"
    newInfo.textContent = key
    newDiv.appendChild(newInfo)
    parent.appendChild(newDiv)
}

})
fetch('https://api.alquran.cloud/v1/meta')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("mySidenav");
        const surahs = data.data.surahs.references;
        surahs.forEach(surah => {
            const surahElement =document.createElement("a")
            surahElement.href = "SurahPage.html?surah="+surah.number
            surahElement.textContent = surah.name
            container.appendChild(surahElement)
            if (surah.number == surahId){
              let temp = document.getElementById("name")
              temp.textContent = surah.name
            }
        });
    })
    .catch(error => console.error('Error fetching Surah data:', error));