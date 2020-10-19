export interface IRepository {

  get(key: string): any;

  set(key: string, value: any): any;

  update(key: string, value: any): any;

  delete(key?: string, value?: any): any;
}
