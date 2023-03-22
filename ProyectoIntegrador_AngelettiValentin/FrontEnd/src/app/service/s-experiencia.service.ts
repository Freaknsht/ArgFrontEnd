import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL= 'http://localhost:8080/explab/'

  constructor(private httpCliente: HttpClient) { }

  public lista() : Observable<Experiencia[]>{
    return this.httpCliente.get<Experiencia[]>(this.expURL + 'lista');

  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpCliente.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpCliente.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpCliente.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.expURL + `delete/${id}`);
  }

}
