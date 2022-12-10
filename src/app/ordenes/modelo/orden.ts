import { ItemOrden } from "./item-orden";
import { Cliente} from '../../clientes/cliente';

export class Orden {
    orderId: string;
    total: number;
    status: string;
    items: Array<ItemOrden> = [];
    user: Cliente;
}
