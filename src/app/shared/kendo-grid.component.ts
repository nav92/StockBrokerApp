import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStocks } from '../Models/IStocks';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {
  @Input() gridData!: IStocks[];
 // public stockData!: Observable<IStocks[]>;
  constructor() { }

  ngOnInit(): void {
    
  }

  getPercenatge(sp: number, cp: number) {
    var result = (sp-cp)/cp * 100;
    console.log("SP:" + sp, "CP:" + cp, "result:" + result);
    
    return result;
  }

}
