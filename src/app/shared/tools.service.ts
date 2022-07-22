import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }
  public extratId(url:string):string{
    let arrOfStr = url.split("/");
    return arrOfStr[arrOfStr.length-2];
  }
}
