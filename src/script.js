let apiKey="a2452760"
let api=` http://www.omdbapi.com/?i=tt3896198&apikey=a2452760` 
async function  fetchMovie(){
      let result = await fetch(`http://www.omdbapi.com/?avenger=tt3896198&apikey=a2452760&s="Lucifer"`)
          let mainResult=await result.json()
        //   console.log(mainResult);
          
      console.log(mainResult);
    display(mainResult)  
}
fetchMovie()
console.log("hey");
let body=document.querySelector("body")
function display(vari){
    
    let clutter2=""
let result= vari.Search

for (const values in result) {
    console.log(values);
clutter2+=`<img src="${vari.Search[values].Poster}" alt=""> <h1>${vari.Search[values].Title}</h1><p>${vari.Search[values].Year}</p> `

}

body.innerHTML=clutter2


}