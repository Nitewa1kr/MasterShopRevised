import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  getAllItems()
  {
    return this.http.get('/api/items').map(res=>res.json());
  }
}
