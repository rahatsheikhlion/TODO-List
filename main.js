let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let dataType = document.getElementById("dataType")
let editPostform = document.getElementById("editPostform")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("button clicked");
    formValidation();

});


let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "ERROR"
        console.log("failure")
    }
    else {
        msg.innerHTML = ""
        console.log("successs");
        acceptData();
    }
}



let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost()
};




let createPost = () => {
    posts.innerHTML +=
    `

    <div id="posts">
    <div class="completed-post">
       <div class="out-circle">
           <div class="check-backgroung">
               <i class="fa-solid fa-check"></i>
           </div>
           <div class="in-circle"></div>
       </div>
   
       <p>  ${data.text}</p>

     
       

   
       <div class="icon">
           <div class="pen-bg"  onclick="myFunction()">  <i onclick="editPost(this)" class="fa fa-regular fa-pen-to-square"></i></div>
           <div class="bin-bg" onClick= "deletePost(this)"> <i  class="fa fa-solid fa-trash"></i></div>
       </div>

   </div>  
</div>
  

`

        ;
    input.value = "";
};







let deletePost = (d) => {
    d.parentElement.parentElement.remove();
};









editPostform.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("save");
    acceptEditData();
})

let editData = {};

let acceptEditData = () => {
    editData["text"] = editpostinput.value;
    console.log(editpostinput.value);
    createEditPost()
};

let createEditPost = () => {
    posts.innerHTML += 
    
    `
    
    <div id="posts">
    <div class="completed-post">
       <div class="out-circle">
           <div class="check-backgroung">
               <i class="fa-solid fa-check"></i>
           </div>
           <div class="in-circle"></div>
       </div>
   
       <p>  ${editData.text}</p>

     
       

   
       <div class="icon">
           <div class="pen-bg"  onclick="myFunction()">  <i onclick="editPost(this)" class="fa fa-regular fa-pen-to-square"></i></div>
           <div class="bin-bg" onClick= "deletePost(this)"> <i  class="fa fa-solid fa-trash"></i></div>
       </div>

   </div>  
</div>
  

`
};




let editPost = (e) => {
    editpostinput.value = e.parentElement.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.parentElement.remove();
}



document.getElementById("editSection").style.display = "none";



function myFunction() {
    var x = document.getElementById("editSection");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




function getValue() {

    let radioWork = document.getElementsByName("type");
    let i;

    for (i = 0; i <= radioWork.length; i++) {
        if (radioWork[i].checked) {
            document.getElementById("dataTypeOutput").innerHTML = radioWork[i].value;
        }
    }
}