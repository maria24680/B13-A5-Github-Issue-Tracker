let issues=[], currentTab="all"

// LOGIN
function login(){
let u=document.getElementById("username").value
let p=document.getElementById("password").value
if(u==="admin" && p==="admin123"){
window.location.href="dashboard.html"
}else alert("Invalid credentials")
}

// LOAD ALL ISSUES
async function loadIssues(){
document.getElementById("loader").classList.remove("hidden")
let res=await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
let data=await res.json()
issues=data.data
setTab(currentTab)
document.getElementById("loader").classList.add("hidden")
}

if(window.location.pathname.includes("dashboard"))
loadIssues()

// DISPLAY CARDS
function displayIssues(data){
document.getElementById("issueCount").innerText=`${data.length} Issues`
let container=document.getElementById("issueContainer")
container.innerHTML=""
data.forEach(issue=>{
let border=issue.status==="open"?"border-green-500":"border-purple-500"
container.innerHTML+=`
<div onclick="openIssue(${issue.id})" class="bg-white rounded-lg shadow p-4 border-t-4 ${border} cursor-pointer hover:shadow-lg">
<h3 class="font-semibold text-sm">${issue.title}</h3>
<p class="text-xs text-gray-500 mt-1">${issue.description}</p>
<div class="flex gap-2 mt-2 text-xs">
<span class="bg-red-100 text-red-600 px-2 rounded">${issue.label}</span>
</div>
<p class="text-xs text-gray-400 mt-3">#${issue.id} by ${issue.author}</p>
<p class="text-xs text-gray-400">${issue.createdAt}</p>
</div>`
})
}

// FILTER & ACTIVE TAB
function setTab(tab){
currentTab=tab
document.getElementById("tabAll").className=tab==="all"?"tab-btn bg-purple-600 text-white px-5 py-2 rounded":"tab-btn bg-gray-200 px-5 py-2 rounded"
document.getElementById("tabOpen").className=tab==="open"?"tab-btn bg-purple-600 text-white px-5 py-2 rounded":"tab-btn bg-gray-200 px-5 py-2 rounded"
document.getElementById("tabClosed").className=tab==="closed"?"tab-btn bg-purple-600 text-white px-5 py-2 rounded":"tab-btn bg-gray-200 px-5 py-2 rounded"
let filtered=issues
if(tab==="open") filtered=issues.filter(i=>i.status==="open")
else if(tab==="closed") filtered=issues.filter(i=>i.status==="closed")
displayIssues(filtered)
}

// SEARCH
async function searchIssues(){
let text=document.getElementById("searchInput").value
let res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
let data=await res.json()
displayIssues(data.data)
}

// MODAL
async function openIssue(id){
let res=await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
let data=await res.json()
let issue=data.data
let modal=document.getElementById("issueModal")
let content=document.getElementById("modalContent")
content.innerHTML=`
<h2 class="text-xl font-bold mb-2">${issue.title}</h2>
<p class="text-gray-500 text-sm mb-2">Opened by ${issue.author} • ${issue.createdAt}</p>
<p class="mb-4">${issue.description}</p>
<div class="flex justify-between bg-gray-100 p-3 rounded mb-4">
<div><p class="text-sm text-gray-400">Assignee</p><p class="font-semibold">${issue.author}</p></div>
<div><p class="text-sm text-gray-400">Priority</p><span class="bg-red-500 text-white px-2 py-1 rounded text-xs">${issue.priority}</span></div>
</div>
<div class="flex justify-end">
<button onclick="closeModal()" class="bg-purple-600 text-white px-4 py-2 rounded">Close</button>
</div>`
modal.classList.remove("hidden")
}

function closeModal(){
document.getElementById("issueModal").classList.add("hidden")
}