import { Injectable } from '@angular/core';
import { ADVERTS } from '../../assets/mock-clientAds'
import { Advert } from '../models/Advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor() { }

  adverts = ADVERTS;

  getAdverts() {
    return this.adverts;
  }

  deleteAdvert(advert: Advert) {
    this.adverts.forEach((item, index) => {
      if (item === advert) this.adverts.splice(index, 1);
    });
  }

  addAdvert(advert: Advert) {
    this.adverts.push(advert);
  }

  updateAdvert(advert: Advert) {
    this.adverts.forEach((item, index) => {
      if (item.id === advert.id) this.adverts[index] = item;
    });
  }

  clear() {
    this.adverts = [];
  }

  generateCode() {
    return Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000);
  }


}
