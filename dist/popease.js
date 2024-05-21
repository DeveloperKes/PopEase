export class PopUp {
    constructor() {
        this.BODY = document.getElementsByTagName('body')[0];
        this.backdrop = document.createElement('div');
        this.properties = {
            position: 'center'
        };
    }
    setPosition() {
        switch (this.properties.position) {
            case "center":
                return `align-items: center; justify-content: center;`;
            case "top":
                return `align-items: flex-start; justify-content: center;`;
            case "bottom":
                return `align-items: flex-end; justify-content: center;`;
            case "left":
                return `align-items: center; justify-content: flex-start;`;
            case "right":
                return `align-items: center; justify-content: flex-end;`;
            case "top-right":
                return `align-items: flex-start; justify-content: flex-end;`;
            case "bottom-right":
                return `align-items: flex-end; justify-content: flex-end;`;
            case "top-left":
                return `align-items: flex-start; justify-content: flex-start;`;
            case "bottom-left":
                return `align-items: flex-end; justify-content: flex-start;`;
            default:
                return `align-items: center; justify-content: center;`;
        }
    }
    buildBackdrop() {
        const backdropStyles = `
            width: calc(100vw - 2rem);
            height: calc(100vh - 2rem);
            z-index: 9999;
            background-color: #1a1a1a59;
            position: fixed;
            top: 0px;
            left: 0px;
            display: flex;
            padding: 1rem;
            ${this.setPosition()}
        `;
        this.backdrop.style.cssText = backdropStyles;
        const card = this.buildBaseCard();
        this.backdrop.appendChild(card);
        this.BODY.insertBefore(this.backdrop, this.BODY.firstChild);
    }
    buildBaseCard() {
        const min_width = window.screen.width * 0.34;
        const min_heigth = min_width - (min_width * 0.34);
        const cardStyles = `
            min-width: ${min_width}px;
            min-height: ${min_heigth}px;
            border-radius: 15px;
            background-color: #fefefe;
            box-shadow: 0px 3px 10px 2px #1a1a1a50;
        `;
        const card = document.createElement('div');
        card.style.cssText = cardStyles;
        return card;
    }
    ready(properties) {
        if (properties)
            this.properties = properties;
        this.buildBackdrop();
    }
}
