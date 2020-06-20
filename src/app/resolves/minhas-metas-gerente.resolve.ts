import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MinhasMetasService } from 'app/service/minhas-metas-gerente.service';

@Injectable({ providedIn: 'root' })
export class MinhasMetasGerenteResolve implements Resolve<any> {
  constructor(
    private api: MinhasMetasService
  ) {}
  resolve() {
    const list = this.api.getList()
    return forkJoin({
      list
    });
  }
}
