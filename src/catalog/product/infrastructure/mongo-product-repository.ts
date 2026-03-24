import { injectable } from "inversify";
import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { Product } from "../product";
import { Presentation } from "../domain/entities/presentation";
import { ProductRepository } from "../application/product-repository";

class PresentationSchema {
  @prop({ required: true })
  id!: string;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  type!: string;

  @prop({ required: true })
  netQuantity!: number;

  @prop({ required: true })
  unitOfMeasure!: string;
}

@modelOptions({ schemaOptions: { collection: "products" } })
class ProductSchema {
  @prop({ required: true })
  id!: string;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  baseUnit!: string;

  @prop({ type: () => [PresentationSchema], _id: false })
  presentations!: PresentationSchema[];
}

const ProductModel = getModelForClass(ProductSchema);

@injectable()
export class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    try {
      await ProductModel.create({
        id: data.id.value,
        name: data.name.value,
        baseUnit: data.baseUnit.value,
        presentations: data.presentations.presentations.map(
          (p: Presentation) => ({
            id: p.id.value,
            name: p.name.value,
            type: p.type.value,
            netQuantity: p.netQuantity.value,
            unitOfMeasure: p.unitOfMeasure.value,
          }),
        ),
      });
    } catch (error) {
      console.error("Error saving product to MongoDB:", error);
      throw error;
    }
  }

  async findById(id: string): Promise<Product | null> {
    const doc = await ProductModel.findOne({ id }).lean();
    if (!doc) return null;

    return Product.build(
      doc.id,
      doc.name,
      doc.baseUnit,
      doc.presentations.map((p) => ({
        id: p.id,
        name: p.name,
        type: p.type,
        netQuantity: p.netQuantity,
        unitOfMeasure: p.unitOfMeasure,
      })),
    );
  }

  async update(data: Product): Promise<void> {
    await ProductModel.updateOne(
      { id: data.id.value },
      { $set: { name: data.name.value } },
    );
  }
}
