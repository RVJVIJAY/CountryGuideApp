var input=document.getElementById("inputbox")
var button=document.getElementById("btn")
var result=document.getElementById("result")
button.addEventListener("click",()=>{
    let countryName=input.value;
    let url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
fetch(url)
.then((response)=>{
    if(!response.ok){
        throw new Error( "Sorry it was some error");
    }
    else{
        return response.json()
    }
})
.then((data)=>{console.log(data)
    result.innerHTML=`
    <center><h1>${data[0].name.common }</h1></center>
    <img class="image" src='${data[0].flags.svg}'/>
    <div class="outsidecontainer" >
    <div class="insidecontainer">
        <h3>Capital :</h3><span>${data[0].capital[0]}</span>
    </div>
    </div>
    <div class="outsidecontainer" >
    <div class="insidecontainer">
        <h3>Borders:</h3><span id="border">${data[0].borders.join(',')}</span>
    </div>
    </div>
    <div class="outsidecontainer" >
    <div class="insidecontainer">
        <h3>Languages :</h3><span>${Object.values(data[0].languages)}</span>
    </div>
    </div>
      <div class="outsidecontainer" >
    <div class="insidecontainer">
        <h3>Population :</h3><span>"${data[0].population}"</span>
    </div>
    </div>
     <div class="outsidecontainer" >
    <div class="insidecontainer">
        <h3>currencies :</h3><span>${
            data[0].currencies[Object.keys(data[0].currencies)].name
          } - ${Object.keys(data[0].currencies)[0]}</span>
    </div>
    </div>
      <div class="outsidecontainer" >
    <div class="insidecontainer">
        <h3>altSpellings:</h3><span>${data[0].altSpellings}</span>
    </div>
    </div>




    `
})
.catch((err)=>console.log(err))
})
