import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStocks } from '../Models/IStocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  readonly ApiUrl = "http://localhost:5161/api/stocks/";
  constructor(private http: HttpClient) { }

  getStockDetails(clientId: number): Observable<IStocks[]> {
    return this.http.get<IStocks[]>(this.ApiUrl + 'GetStockDetails/' + clientId);
  }
}
