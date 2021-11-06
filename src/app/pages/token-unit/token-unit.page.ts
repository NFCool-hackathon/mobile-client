import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SmartContractService} from "../../core/smart-contract.service";
import {TokenModel} from "../../models/token.model";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-token-unit',
  templateUrl: './token-unit.page.html',
  styleUrls: ['./token-unit.page.scss'],
})
export class TokenUnitPage implements OnInit {

  tokenId: number;
  unitId: number;

  tokenData: TokenModel;

  constructor(private route: ActivatedRoute,
              private smartcontract: SmartContractService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.tokenId = parseInt(this.route.snapshot.paramMap.get('tokenId'), 10);
    this.unitId = parseInt(this.route.snapshot.paramMap.get('unitId'), 10);

    this.smartcontract.getToken(this.tokenId).then(res => {
      this.tokenData = res;
    })
      .catch(e => {
        this.alertCtrl.create({
          header: 'A error as occur',
          subHeader: 'Error details:',
          message: e,
        });
      });
  }

}
