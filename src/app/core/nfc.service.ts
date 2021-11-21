import { Injectable } from '@angular/core';
import {NFC} from '@ionic-native/nfc/ngx';

@Injectable({
  providedIn: 'root'
})
export class NfcService {

  constructor(private nfc: NFC) { }

  public async readTagAndroid(): Promise<any> {
    return new Promise((resolve) => {
      const flags = this.nfc.FLAG_READER_NFC_A || this.nfc.FLAG_READER_NFC_V;
      const readerMode$ = this.nfc.readerMode(flags).subscribe(
        tag => {
          console.log(JSON.stringify(tag));
          readerMode$.unsubscribe();
          resolve(tag);
        },
        err => console.log('Error reading tag', err)
      );
    });
  }
}
