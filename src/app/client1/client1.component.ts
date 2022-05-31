import { Component, OnInit } from '@angular/core';
import { IStocks } from '../Models/IStocks';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-client1',
  templateUrl: './client1.component.html',
  styleUrls: ['./client1.component.css']
})
export class Client1Component implements OnInit {

  constructor(private _service: StockService) { }
  public client1Data!: IStocks[];
  ngOnInit(): void {
    this._service.getStockDetails(1).subscribe(res => { this.client1Data = res });
  }

}
