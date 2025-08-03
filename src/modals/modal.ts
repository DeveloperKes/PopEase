import { PopUpPosition, Properties } from "../interfaces/global";
import { Backdrop } from "../modules/backdrop";
import { getUUID, setPosition } from "../utils";
import { Card } from "./card";

type BaseStyles = (position: PopUpPosition) => string;

export class Modal {
    private readonly BODY: HTMLBodyElement = document.getElementsByTagName('body')[0];
    private readonly base: HTMLElement = document.createElement('section');
    properties!: Properties | undefined;
    private readonly uuid: string;

    constructor() {
        this.uuid = getUUID();
    }

    private generateBaseModal() {
        this.base.role = "alert";
        this.base.setAttribute("popease-id", this.uuid);
        this.base.style.cssText = Styles.base(this.properties!.position ?? "center");

        const backdrop = new Backdrop(this.properties!, this.closeModal).buildBackdrop();
        this.base.appendChild(backdrop);

        const card = new Card(this.properties!).buildBaseCard();
        this.base.appendChild(card);

        this.BODY.insertBefore(this.base, this.BODY.lastChild);
    }

    private readonly closeModal = () => {
        const referenceModal = document.querySelector(`section[popease-id="${this.uuid}"]`);
        try {
            if (!referenceModal) throw new Error(`TypeError:\n 
            Modal not found, action canceled`);

            this.base.style.display = "none";
            this.base.remove();

            setTimeout(() => { this.properties = undefined }, 100)

        } catch (error) {
            console.error(error);
        }
    }

    public ready(properties: Properties) {
        try {
            if (!properties) throw new Error(`TypeError:\n 
            Properties not set, undefined can't use to initialize`);

            this.properties = properties;
            this.generateBaseModal();
        } catch (error) {
            console.error(error);
        }
    }
}

const Styles: Record<string, BaseStyles> = {
    base: (position: PopUpPosition) => `
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        z-index: 99999;
        ${setPosition(position)}
    `,
}
