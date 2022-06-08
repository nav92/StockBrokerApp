import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStocks } from '../Models/IStocks';
import { StockService } from './stock.service';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {
  @Input() clientId! : number;
  gridData!: IStocks[];
  constructor(private _service: StockService) { }
  
    ngOnInit(): void {
      this._service.getStockDetails(this.clientId).subscribe(res => { this.gridData = res });
  }

  getPercenatge(sp: number, cp: number) {
    var result = (sp-cp)/cp * 100;
    console.log("SP:" + sp, "CP:" + cp, "result:" + result);
    
    return result;
  }

}
