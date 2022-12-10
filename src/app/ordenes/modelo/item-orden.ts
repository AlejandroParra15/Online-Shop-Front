import { Item } from "./item";

export class ItemOrden {
    orderItemId: string;
    item: Item;
    quantity: number = 1;
    totalItem: number;
}
