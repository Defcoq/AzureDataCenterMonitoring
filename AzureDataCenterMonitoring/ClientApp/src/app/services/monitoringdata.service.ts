import { Injectable } from '@angular/core';
import { Randomdata } from './randomdata';
import { Nodedata } from './nodedata';
import { Metricdata } from './metricdata';


@Injectable({
  providedIn: 'root'
})
export class MonitoringdataService {
  private data: Randomdata;
  interval: any;
  // tslint:disable-next-line: no-output-on-prefix
  constructor() { }

  generateData(): Randomdata {
    this.data = new Randomdata();
    this.data.cluster1 = [];
    this.data.cluster2 = [];
    this.data.cpu = { used: 0, available: 0 };
    this.data.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) { this.data.cluster1.push(this.randomNode(i)); }
    for (let i = 4; i < 7; i++) { this.data.cluster2.push(this.randomNode(i)); }
    return this.data;
  }
  private randomNode(i): Nodedata {
    const node = {
      name: 'node' + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) }
    };
    this.data.cpu.used += node.cpu.used;
    this.data.cpu.available += node.cpu.available;
    this.data.mem.used += node.mem.used;
    this.data.mem.available += node.mem.available;
    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
