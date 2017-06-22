import { Distribucion } from './distribucion';

import { Poisson } from './poisson/poisson';
import { Normal } from './normal/normal';
import { Gamma } from './gamma/gamma';
import { Exponencial } from './exponencial/exponencial';

var poisson: Distribucion = new Poisson(1,"Poisson",350,20);
var normal: Distribucion = new Normal(2,"Normal",1000,5,2);
var gamma: Distribucion = new Gamma(3,"Gamma",100,0.5,20);
var exponencial: Distribucion = new Exponencial(4,"Exponencial",150,0.7);

export const DISTRIBUCIONES: Distribucion[] = [
  poisson, normal, gamma, exponencial
];