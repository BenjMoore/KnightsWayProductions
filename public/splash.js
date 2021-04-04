
window.addEventListener("DOMContentLoaded", () => {
 
	new FlexPannels();

	

});

class FlexPannels {
	constructor() {
        this.root= document.querySelector(".panels-wrapper");
        // this.panels ,this.panel,this.i defined in methods and getters
        
        this.src=this.get_srcs;
        this.sayings=this.get_sayings;
        this.createPanels();
        this.handleImageLoad=this.handleImageLoad.bind(this);

        this.addContent();
	}

	get get_srcs() {
	return 	[
			"https://images.unsplash.com/photo-1600888287364-49f342180d99?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=1280",
			"https://images.unsplash.com/photo-1608993871699-e32b61dedd8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280",
			"https://images.unsplash.com/photo-1441936064713-d73d35f4fcb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1386",
			"https://images.unsplash.com/photo-1525858628969-2c3e8d8e1b42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1439",
			
		];
    }
    get get_sayings(){
       return [
			"",
			{
				saying: "",
				topic: "Knights Way Productions",
			},
			{
				saying: "",
				topic: "Unfetted",
			},
		
			"",
		];

    }

    createPanels(){
        let panel = document.querySelector("template").content;
        this.src.forEach((src) => {
            let toAppend = panel.cloneNode(true);
    
            this.root.append(toAppend);
        });
        this.panels=this.root.querySelectorAll(".panel");
    }
    addContent(){
        if(this.i==undefined)this.i=0;
        if(this.i>=this.sayings.length)return;
        
        this.addImage();
        
    }

     addImage() {
		this.panel = this.panels[this.i];

		this.img =this.panel.querySelector("img");
		this.img.addEventListener("load", this.handleImageLoad);
		this.img.src = this.src[this.i];
    }
     handleImageLoad() {
         let panel=this.panel;

		this.img.removeEventListener("load", this.handleImageLoad);
		let loader = panel.querySelector(".loader");
		this.addText();

		loader.classList.add("hide");
		panel.classList.remove("dont-touch");
		setTimeout(() => {
			loader.remove();
		}, 3000);

		setTimeout(() => {
			this.i++;

			this.addContent();
		}, 500);
    }
    addText(){
        let panel=this.panel;
        let titleWrapper = panel.querySelector(".title");
		let textWrapper = panel.querySelector(".text");
		let { topic: title, saying: text } = this.sayings[this.i];
		if (title) {
			titleWrapper.textContent = title.toUpperCase();
			textWrapper.textContent = text;
		} else {
			titleWrapper.parentNode.remove();
		}
    }
}
