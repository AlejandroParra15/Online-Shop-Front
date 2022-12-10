import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from './modelo/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private urlEndPoint: string = 'http://localhost:8080/shop/books';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Item[])
    );
  }

  create(item: Item) : Observable<Item> {
    return this.http.post<Item>(this.urlEndPoint, item, {headers: this.httpHeaders})
  }

  getItem(id): Observable<Item>{
    return this.http.get<Item>(`${this.urlEndPoint}/${id}`)
  }

  update(item: Item): Observable<Item>{
    return this.http.put<Item>(`${this.urlEndPoint}/${item.itemId}`, item, {headers: this.httpHeaders})
  }

  delete(id: string): Observable<Item>{
    return this.http.delete<Item>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
