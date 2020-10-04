export class GlassesList{
    constructor(){
        this.glistArray = [];
    }

    addGlasses = (glasses)=>{
       this.glistArray.push(glasses);
    }

    renderGlasses = () =>{
        //html content
        let content = "";
        content = this.glistArray.reduce((glContent, arrayItem,index)=>{
            glContent+= `
                    <div class = "col-4 px-3">
                     <img class="img-fluid vglasses__items" onClick= "selectGlasses(event)" data-id = "${arrayItem.id}" src="${arrayItem.src}" alt="Glasses">
                    </div>
                    `;
                    return glContent;
                },"");

        return content;
    }
}