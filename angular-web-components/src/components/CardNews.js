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
        
        
        // Creating card left

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("url-link");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        // Creating card right
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/phot-default.jpg";
        cardRight.appendChild(newsImage)

        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);
        
        return componetRoot;

    }

    style(){

    }
}

customElements.define('card-news', CardNews)