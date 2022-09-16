 const localAPI = "http://localhost:3000/people"
 let emptyArray = []
const serverData = () =>{
  return fetch(localAPI).then(response => response.json()) 
}
 


document.addEventListener('DOMContentLoaded',async()=>{
  emptyArray = await serverData()
  console.log('i am empty:',emptyArray)
  emptyArray.forEach(element => {
    console.log("i am element:",element)
   const h4 =  document.createElement("h4")
   document.body.appendChild(h4)
   const p = document.createElement("p")
    document.body.appendChild(p)
  console.log(h4)
   h4.textContent=element.name
   p.textContent += element.craft
  console.log("we are debugging:",element.craft)
  });

})

