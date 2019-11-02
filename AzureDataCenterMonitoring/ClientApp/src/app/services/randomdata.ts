import { Metricdata } from './metricdata';
import { Nodedata } from './nodedata';

export class Randomdata {
  public cpu: Metricdata;
  public mem: Metricdata;
  public cluster1: Nodedata[];
  public cluster2: Nodedata[];
}
