let myLeads = []

let oldLeads = []

const inputEl = document.getElementById("inputel")
const displayleadEl = document.getElementById("displaylead")

const inputbtnEl = document.getElementById("input-btn")

const deleteEl = document.getElementById("delete-btn")

const saveBtn = document.getElementById("save-btn")


//get leads fromthe localstorage
// store it in a variable, leadsFromLocalStorage

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++){
    //displayleadEl.innerHTML += "<li>" + myLeads[i] +  "</li>"
    //add the item to the listItems variable instead of the 
    //displayleadEl 
    //listItems += "<li> <a target = '_blank' href='  " + myLeads[i]  +"'>" + myLeads[i] +  "</a></li>"
    listItems += `
                   <li> 
                        <a target = '_blank' href= '${leads[i]}' >
                        
                             ${leads[i]} 
                             
                        </a>
     
                    </li>
                      
                  `
  
 
 } 
 
 // Render the listItems inside the unordered list using displayleadEl 
 displayleadEl.innerHTML = listItems 

}  



saveBtn.addEventListener ("click", function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

  })
 
})



deleteEl.addEventListener("dblclick", function() {
    
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputbtnEl.addEventListener("click", function() {
  
 myLeads.push(inputEl.value)
 inputEl.value = ""

 //save myLeads array to the localStorage
 //PS: remember JSON.stringify()

 localStorage.clear()

 localStorage.setItem("myLeads", JSON.stringify(myLeads))

 console.log(leadsFromLocalStorage)
 

 render(myLeads)


}) 



// create a variable, listItems, to build 
//all the Html for the list items.  assign it to an empty string to 
//beging with








   



 


   
    

  
 


  


