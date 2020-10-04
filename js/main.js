/**
 * B1: Hiển thị Danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dựng chức năng so sánh
 */
// simulation of JSON API
let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];

//IMPORT
import {Glasses} from "./glasses.js";
import {GlassesList} from "./glassesList.js";


const getELE = (id)=>{
    return document.getElementById(id);
}


let glassesList = new GlassesList;
const displayGlassesList = ()=>{
    let divGlassesList = getELE("vglassesList");
  
  dataGlasses.map((item,index)=>{
    let glasses = new Glasses(item.id,item.src,item.virtualImg,item.brand,item.name,item.color,item.price,item.description);
    // console.log(glasses);
    glassesList.addGlasses(glasses);
   

  });
 
//   console.log(glassesList);
divGlassesList.innerHTML = glassesList.renderGlasses();

  
}
displayGlassesList();

const selectGlasses = (e) =>{
//   console.log(e);
  let glassesIDPicked= e.target.getAttribute("data-id");
  let glassesObjPicked = {};
  for(let value of glassesList.glistArray){
      if(glassesIDPicked == value.id){
         glassesObjPicked = value;
      }
    }
    console.log(glassesObjPicked);
    tryGlassesOn(glassesObjPicked);
}

const tryGlassesOn = (glassesObjPicked)=>{
    let glassesOnModel = getELE("avatar");
    let glassesInfo = getELE("glassesInfo");

    glassesOnModel.innerHTML = 
    `
    <img id = "glassesOn" class="img-fluid" src="${glassesObjPicked.virtualImg}"> 
    `;
     

    let status= "";
    if(glassesObjPicked.status){
       status  = "Stocking";
    }
    else{
        status = "Sold out!";
    }

    glassesInfo.innerHTML = `
       <h5> ${glassesObjPicked.name } - ${glassesObjPicked.brand} (${glassesObjPicked.color})</h5>

       <p class = "card-text> 
       <span class = " btn btn-danger btn-sm mr-3"> $${glassesObjPicked.price}</span>
       <span class = "text-success"> ${status} </span>
   
       </p>

       <p class = "card-text">
       ${glassesObjPicked.desc};
       </p>
     
    
   
    `;

    glassesInfo.style.display = "block";

}

const removeGlasses = (isDisplay) =>{
  let glassesOn = getELE("glassesOn");
 


  if (glassesOn != null){
    if(isDisplay == true){ //true
      glassesOn.style.opacity = "0.9";
      
      
    }
    else{
      glassesOn.style.opacity = "0";
   
    }
  }
 
  
}

window.selectGlasses = selectGlasses;
window.removeGlasses = removeGlasses;




