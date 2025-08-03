export const setPosition = (position: string) => {
    switch (position) {
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