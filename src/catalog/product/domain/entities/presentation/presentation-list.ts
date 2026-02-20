import { Presentation } from "../presentation";

export class PresentationList {
    constructor(
        public readonly presentations: Presentation[]
    ) {
        this.presentations = presentations;
    }

    // build debe validar que no se generen más de 5 presentaciones por producto
    public static build(presentations: Presentation[]): PresentationList {
        if (presentations.length > 5) {
            throw new Error("No se pueden generar más de 5 presentaciones por producto");
        }
        return new PresentationList(presentations);
    }
}