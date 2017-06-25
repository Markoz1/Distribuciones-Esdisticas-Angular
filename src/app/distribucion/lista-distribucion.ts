import { Distribucion } from './distribucion';

import { Poisson } from './poisson/poisson';
import { Normal } from './normal/normal';
import { Gamma } from './gamma/gamma';
import { F } from './f/f';
import { Exponencial } from './exponencial/exponencial';
import { LogNormal } from './logaritmica_Normal/log_Normal';
import { Beta } from './beta/beta';
import { TStudent } from './t-Student/tStudent';
import { Empirica } from './empirica/empirica';

var poisson: Distribucion = new Poisson(1, "Poisson", 350, 20);
var normal: Distribucion = new Normal(2, "Normal", 1000, 5, 2);
var gamma: Distribucion = new Gamma(3, "Gamma", 100, 0.5, 20);
var exponencial: Distribucion = new Exponencial(4, "Exponencial", 150, 0.7);
var f: Distribucion = new F(5, "f", 350, 2, 5);
var beta: Distribucion = new Beta(6, "Beta", 0, 0, 0, 0);
var logNormal: Distribucion = new LogNormal(7, "Logaritmica Normal", 100, 3, 2);
var tStudent: Distribucion = new TStudent(8, "T-student", 100, 3, 2);
var empirica: Distribucion = new Empirica(9, "Empirica", 100, 3, 2);


export const DISTRIBUCIONES: Distribucion[] = [
  poisson,
  normal,
  gamma,
  exponencial,
  f,
  beta,
  logNormal,
  tStudent,
  empirica
];