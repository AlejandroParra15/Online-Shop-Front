import {Orden} from '../ordenes/modelo/orden';

export class Cliente {
  id: string;
  email: string;
  password:string;
  address:string;
  phoneNumber: string;
  orders: Array<Orden> = [];
  roles: string[] = [];
}
