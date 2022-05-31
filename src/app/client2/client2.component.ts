import { Component, OnInit } from '@angular/core';
import { IStocks } from '../Models/IStocks';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.css']
})
export class Client2Component implements OnInit {

  constructor(private _service: StockService) { }
  public client2Data!: IStocks[];
  ngOnInit(): void {
    this._service.getStockDetails(2).subscribe(res => { this.client2Data = res });
  }

}
