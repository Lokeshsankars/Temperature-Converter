function convert()
{
let cel = Number(document.getElementById("input").value)
let fah = 1.8*cel + 32
let results = document.getElementById("result")
results.innerHTML=fah.toFixed(2) + "ºF"
}

function convert1()
{
 let fah = Number(document.getElementById("input").value)
 let cel = ((fah-32))*5/9 
 let results = document.getElementById("result")
 results.innerHTML=cel.toFixed(2) + "ºC"
}

function convert2()
{

   let reset = " "
   let results1 = document.getElementById("result")
   results1.innerHTML=reset
   document.getElementById("input").value = " "
         
}