import { Metricdata } from './metricdata';

export interface Nodedata {
  name: string;
  cpu: Metricdata;
  mem: Metricdata;
}
