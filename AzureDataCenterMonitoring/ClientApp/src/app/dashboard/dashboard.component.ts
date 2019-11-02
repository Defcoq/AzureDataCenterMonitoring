import { Component, OnInit, OnDestroy, Output, EventEmitter  } from '@angular/core';
import { Metricdata } from '../services/metricdata';
import { Nodedata } from '../services/nodedata';
import { Randomdata } from '../services/randomdata';
import { MonitoringdataService } from '../services/monitoringdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cpu: Metricdata;
  mem: Metricdata;
  cluster1: Nodedata[];
  cluster2: Nodedata[];
  data: Randomdata;
  interval: any;
   // tslint:disable-next-line: no-output-on-prefix
   @Output() onRefresh: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(private monitoringservice: MonitoringdataService) { }

  // tslint:disable-next-line: use-lifecycle-interface
   ngOnDestroy(): void {
    clearInterval(this.interval);
  }


  ngOnInit() {
    this.generateData();
    this.interval = setInterval(() => {
    this.generateData();
    }, 15000);
  }

  generateData(): void {
    this.data = this.monitoringservice.generateData();
    this.cpu = this.data.cpu;
    this.mem = this.data.mem;
    this.cluster1 = this.data.cluster1;
    this.cluster2 = this.data.cluster2;
    this.onRefresh.emit(new Date());
  }



}
