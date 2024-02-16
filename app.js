var a = document.getElementById("main")



function handleInp(val) {
    var x = document.getElementById("create-btn")
    // if(val.value !== ""){

     x.disabled = false
    // }
    
}

function createElem(val) {
    
    var b = document.getElementById("inp")

    if(b.value == ""){
        val.disabled = true
        alert("Please fill this input!")
        return;
    }
    //  if(b.value !== ""){
        // val.disabled = false
        

    // }


    var row = document.createElement("div")
    // row.innerText = ""
    row.setAttribute("class","row")
    // btnDelete.setAttribute("onclick","handleDelete(this)")


    var btnDelete = document.createElement("button")
    btnDelete.innerText = "Delete"
    btnDelete.setAttribute("class","btn-del btn")
    btnDelete.setAttribute("onclick","handleDelete(this)")


    var btnEdit = document.createElement("button")
    btnEdit.innerText = "Edit"
    btnEdit.setAttribute("class","btn-edit btn")
    btnEdit.setAttribute("onclick","handleEdit(this)")


    var btnUpdate = document.createElement("button")
    btnUpdate.innerText = "Update"
    btnUpdate.setAttribute("class","btn-update btn")
    btnUpdate.setAttribute("onclick","handleUpdate(this)")


   
    var p = document.createElement("input")
    p.value = b.value 
    p.setAttribute("class","p1")
    a.appendChild(row)
    row.appendChild(p)
    row.appendChild(btnEdit)
    row.appendChild(btnDelete)
    row.appendChild(btnUpdate)

    b.value = null
    p.disabled = true
    btnUpdate.disabled = true
    btnUpdate.style.opacity = ".3"
    btnUpdate.innerHTML = "<s>Update</s>"
    
}
    
    
    


function handleEdit(val) {

    val.parentNode.childNodes[0].disabled = false
    val.parentNode.childNodes[3].style.opacity = "10"
    val.parentNode.childNodes[3].innerHTML = "Update"
    val.parentNode.childNodes[3].disabled = false

    val.parentNode.childNodes[1].style.opacity = ".3"
    val.parentNode.childNodes[1].innerHTML = "<s>Edit</s>"
    val.parentNode.childNodes[1].disabled = true

      
}

function handleUpdate(val) {
    val.parentNode.childNodes[0].disabled = true

    val.parentNode.childNodes[1].disabled = false
    val.parentNode.childNodes[1].style.opacity = "10"
    val.parentNode.childNodes[1].innerHTML = "Edit"

    val.parentNode.childNodes[3].disabled = true
    val.parentNode.childNodes[3].style.opacity = ".3"
    val.parentNode.childNodes[3].innerHTML = "<s>Update</s>"
  
}


function handleDelete(val) {
    var a = val.parentElement
    a.remove()
}




function deleteAll() {

    a.innerHTML = null
    
}

