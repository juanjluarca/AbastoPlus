import { PresentationId } from "./presentation/presentations-id";
import { PresentationName } from "./presentation/presentation-name";
import { PresentationType } from "./presentation/presentation-type";
import { PresentationNetQuantity } from "./presentation/presentations-net-quantity";
import { PresentationUnitOfMeasure } from "./presentation/presentation-unit-of-measure";

export class Presentation {
    constructor(
        public readonly id: PresentationId,
        public readonly name: PresentationName,
        public readonly type: PresentationType,
        public readonly netQuantity: PresentationNetQuantity,
        public readonly unitOfMeasure: PresentationUnitOfMeasure
    )
    {
        this.id = id;
        this.name = name;
        this.type = type;
        this.netQuantity = netQuantity;
        this.unitOfMeasure = unitOfMeasure;
    }

    public static build(id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string): Presentation {
        return new Presentation(
            new PresentationId(id),
            new PresentationName(name),
            new PresentationType(type),
            new PresentationNetQuantity(netQuantity),
            new PresentationUnitOfMeasure(unitOfMeasure)
        );
    }
}