import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRepository } from '../contracts/repository.interface';

@Injectable({
  providedIn: 'root'
})
export class RemoteRepository implements IRepository {

  constructor(private http: HttpClient) { }

  public get(endpoint: string): Observable<Object> {

    return this.http.get(environment.apiUrl + endpoint);
  }

  public set(endpoint: string, params: any): Observable<Object> {

    return this.http.post(environment.apiUrl + endpoint, params);
  }

  public update(endpoint: string, params: any): Observable<Object> {

    return this.http.put(environment.apiUrl + endpoint, params);
  }

  public delete(endpoint?: string): Observable<Object> {

    return this.http.delete(environment.apiUrl + endpoint);
  }
}
