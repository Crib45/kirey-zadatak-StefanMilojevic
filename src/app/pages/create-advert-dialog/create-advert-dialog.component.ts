import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Advert } from '../../models/Advert';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-create-advert-dialog',
  templateUrl: './create-advert-dialog.component.html',
  styleUrls: ['./create-advert-dialog.component.css']
})
export class CreateAdvertDialogComponent implements OnInit {

  advertForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    endDate: new FormControl('')
  });
  advert: Advert = new Advert();
  dialogType: String;
  currentDate: Date;

  constructor(public dialogRef: MatDialogRef<CreateAdvertDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private service: AdvertService) {
    this.currentDate = new Date();
    this.dialogType = data.dialogType;
    if (this.dialogType !== 'create') {
      this.advert = data.advert;
      this.advertForm.patchValue({
        name: this.advert.name,
        description: this.advert.description,
        price: this.advert.price,
        endDate: this.advert.endDate
      });
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.dialogType === 'create') {
      this.advert = Object.assign({}, this.advertForm.value);
      let temp: Advert[] = this.service.getAdverts();
      this.advert.code = this.service.generateCode();
      //generise id koji bi se automatski generisao sa pravim podacima u bazi.
      if (temp.length !== 0) {
        this.advert.id = temp[temp.length - 1].id + 1;
      }
      else {
        this.advert.id = 1;
      }
      this.service.addAdvert(this.advert);

    }
    else {
      this.advert.name = this.advertForm.get('name').value;
      this.advert.description = this.advertForm.get('description').value;
      this.advert.endDate = this.advertForm.get('endDate').value;
      this.advert.price = this.advertForm.get('price').value;
      this.service.updateAdvert(this.advert);
    }
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
