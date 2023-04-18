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
        const style = document.createElement("style");
        style.textContent = `
        
.card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    box-shadow: 17px 8px 20px 8px #000;
}

.card__left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 125%;
    padding-left: 10px;
}

.card__left > span {
   font-weight: 400;
}

.card__left > a{
    margin-top: 15px;
    font-size: 25px;
    text-decoration: none;
    font-weight: bold;
    color: black;
}

.card__left > p {
    color: rgb(72, 71, 71);
}

img{
    width: 100%;
}
        
        `
        return style;
    }
}

customElements.define('card-news', CardNews)