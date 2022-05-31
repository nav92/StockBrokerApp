import { Component, OnInit } from '@angular/core';
import { IStocks } from '../Models/IStocks';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-client3',
  templateUrl: './client3.component.html',
  styleUrls: ['./client3.component.css']
})
export class Client3Component implements OnInit {

  constructor(private _service: StockService) { }
  public client3Data!: IStocks[];
  ngOnInit(): void {
    this._service.getStockDetails(3).subscribe(res => { this.client3Data = res });
  }

}
