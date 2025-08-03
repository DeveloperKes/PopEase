import { Properties } from "./interfaces/global";
import { Modal } from "./modals/modal";

export class PopEase {
    public modal(properties: Properties) {
        const modal = new Modal();
        modal.ready(properties);
    }
}