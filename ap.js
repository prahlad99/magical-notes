console.log("mah starting website")
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` 
    <div class=" notecard my-2 mx-2 card" style="width: 18rem;" background-color:"blue">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1} </h5 >
          <p class="card-text">${element}</p>
          <button  id ="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Node</button>
      </div >
    </div > `;
    });
    let notesele = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesele.innerHTML = html;
    }
    else {
        notesele.innerHTML = `please add something on your notes your notes is empty please`;
    }
}
function deletenote(index){
    console.log("i am deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
notesobj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesobj));
shownotes();
}
 let search=document.getElementById('searchnav');
 search.addEventListener("input",function(){
     let inputval=search.value;
     console.log("input event listener fire",inputval);
     let notecarding =document.getElementsByClassName('notecard');
     Array.from(notecarding).forEach(function(element){
         let cardtext=element.getElementsByTagName("p")[0].innerText ;
        console.log(element)
         if(cardtext.includes(inputval)){
             element.style.display="block";

         }else{
             element.style.display="none";
         }
        // console.log(cardtext) 
        })
 })