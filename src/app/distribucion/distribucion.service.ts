import { Distribucion } from './distribucion';
import { DISTRIBUCIONES } from './lista-distribucion';
import { Injectable } from '@angular/core';

@Injectable()
export class DistribucionService {
    getDistribuciones(): Promise<Distribucion[]> {
    return Promise.resolve(DISTRIBUCIONES);
  }
    getDistribucion(id: number): Promise<Distribucion> {
        return this.getDistribuciones()
                    .then(distribuciones => distribuciones.find(distribucion => distribucion.id === id));
    }
}