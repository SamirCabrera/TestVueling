import { Injectable } from '@angular/core';
import { IRepository } from '../contracts/repository.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalRepository implements IRepository {

  constructor() { }

  public get(key: string): any {

    return localStorage.getItem(key);
  }

  public set(key: string, value: any): void {

    localStorage.setItem(key, JSON.stringify(value));
  }

  public update(key: string, value: any): void {

    this.set(key, value);
  }

  public delete(key?: string): void {

    if (key) {

      localStorage.removeItem(key);
      return;
    }

    localStorage.clear();
  }
}
