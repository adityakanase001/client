import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper: HttpClient) { }

  Select()
  {
    return this.helper.get("http://172.18.4.238:9898/list");
  }

  Delete(Venue)
  {
    return this.helper.delete("http://172.18.4.238:9898/list/"+Venue);
  } 

  Insert(record)
  {
    return this.helper.post("http://172.18.4.238:9898/list",record);
  }
}
