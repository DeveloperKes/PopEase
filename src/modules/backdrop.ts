import { Properties } from "../interfaces/global";

export class Backdrop {
    private readonly properties: Properties;
    private readonly closeCallback: VoidFunction;

    constructor(properties: Properties, closeCallback: VoidFunction) {
        this.properties = properties;
        this.closeCallback = closeCallback;
    }

    public buildBackdrop(): HTMLDivElement {
        const { backdrop: backdropProps } = this.properties;
        let display = "flex";
        if (backdropProps?.show != undefined && !backdropProps.show) display = "none";
        const backdrop = document.createElement("div");
        const backdropStyles = `
            width: calc(100vw - 32px);
            height: calc(100vh - 32px);
            background: #1a1a1a59;
            position: fixed;
            top: 0px;
            left: 0px;
            display: flex;
            padding: 16px;
            cursor: ${backdropProps?.closeWhenClick ? "pointer" : "initial"};
            display: ${display};
        `;
        backdrop.style.cssText = backdropStyles;

        backdrop.addEventListener("click", () => backdropProps?.onClick ? backdropProps.onClick() : () => { });
        backdrop.addEventListener("click", () => backdropProps?.closeWhenClick && this.closeCallback());

        return backdrop;
    }
}