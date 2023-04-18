class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const componetRoot = document.createElement("div");
        componetRoot.setAttribute("class","card");
        
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);
        
        return componetRoot;

    }

    style(){

    }
}

customElements.define('card-news', CardNews)