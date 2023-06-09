import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = ['Naga', 'naga@dmi.net', 'DMI001'];
  info2: string[] = ['Nakks', 'nakks@dmi.net', 'DMI002'];
  info3: string[] = ['Jack', 'jack@dmi.net', 'DMI003'];

  getInfo1(): string[] {
    return this.info1;
  }

  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }

  addInfo(info:any) {
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    return this.info1
  }
  constructor() {}
}
