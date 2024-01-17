function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const surahId = getQueryParam('surah');
let test = new Request('https://api.quran.com/api/v4/quran/verses/indopak?chapter_number='+surahId)
fetch(test)
.then(response => {
    if (!response.ok) {

    }
    return response.json();
  })
.then(data => {


const verses = data["verses"]; 
console.log(verses)


})
