import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, switchMap, timer, retry, share, takeUntil } from 'rxjs';
import { IStocks } from '../Models/IStocks';

@Injectable({
  providedIn: 'root'
})
export class StockService implements OnDestroy {
  private allStocks$: Observable<IStocks[]> | undefined;
  private stopPolling = new Subject();
  readonly ApiUrl = "http://localhost:5161/api/stocks/";
  constructor(private http: HttpClient) {
   }

  getStockDetails(clientId: number): Observable<IStocks[]> {
    this.allStocks$ = timer(1, 3000).pipe(
      switchMap(() => this.http.get<IStocks[]>(this.ApiUrl + 'GetStockDetails/' + clientId)),
      retry(), share(), takeUntil(this.stopPolling)
    );
    return this.allStocks$;
  }

  ngOnDestroy(): void {
    this.stopPolling.next(1);
  }
}
