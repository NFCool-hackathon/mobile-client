import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SmartContractService} from '../../core/smart-contract.service';
import {createInitialTokenModel, TokenModel} from '../../models/token.model';
import {AlertController} from '@ionic/angular';
import {createInitialUnitModel, UnitModel} from '../../models/unit.model';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-token-unit',
  templateUrl: './token-unit.page.html',
  styleUrls: ['./token-unit.page.scss'],
})
export class TokenUnitPage implements OnInit {

  tokenId: number;
  unitId: number;

  contractAddress = environment.contractAddress;

  token: TokenModel = createInitialTokenModel();
  unit: UnitModel = createInitialUnitModel();

  constructor(private route: ActivatedRoute,
              private smartcontract: SmartContractService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.tokenId = parseInt(this.route.snapshot.paramMap.get('tokenId'), 10);
    this.unitId = parseInt(this.route.snapshot.paramMap.get('unitId'), 10);

    this.smartcontract.getToken(this.tokenId).then(res => {
      this.token = res as TokenModel;
      console.log(this.token);
    })
    .catch(e => {
      console.error(e);
      this.alertCtrl.create({
        header: 'A error as occur',
        subHeader: 'Error details:',
        message: e,
      });
    });

    this.smartcontract.getTokenUnit(this.tokenId, this.unitId).then(res => {
      this.unit = res as UnitModel;
      console.log(this.unit);
    })
      .catch(e => {
        console.error(e);
        this.alertCtrl.create({
          header: 'A error as occur',
          subHeader: 'Error details:',
          message: e,
        });
      });
  }

}
