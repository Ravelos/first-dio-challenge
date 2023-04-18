class DynamicTitle extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        // Component's base
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = 'My new'

        // Component's style
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `
        // Send to the shadow

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define('dynamic-title', DynamicTitle);