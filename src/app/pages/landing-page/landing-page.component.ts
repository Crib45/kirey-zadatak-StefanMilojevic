import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  adPetList = [
    {
      image: "https://opusteno.rs/slike/2015/07/americki-stafordski-terijer-27625/americki-stafordski-terijer-sp.jpg",
      description: 'Američki stafordski terijer, takođe poznat kao staford, pasmina je pasa srednje veličine sa kratkom dlakom. Jedna je od nekoliko pasmina poznatih kao pit bull i dugo je poznata kroz istoriju.',
      name: 'Americki staford terijer'
    }, {
      image: "https://ksrs.rs/wp-content/uploads/2017/07/166-768x500.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Nemacki ovcar'
    }, {
      image: "https://media.mojtrg.rs/Image/e3e79df566ae4a27838f748c1ed24fc8/20160404/false/false/640/480/ZLATNI-RETRIVER-stenad-.jpeg",
      description: 'Zlatni retriver je pas koji obožava kontakt sa Sudomom, klanovima porodiće, posetljivo sa decom.',
      name: 'Zlatni retriver'
    }, {
      image: "https://adriaticmedianethr.files.wordpress.com/2017/08/sibirski-haski-2.jpeg?quality=100&strip=all&w=480&h=330&crop=1",
      description: 'Sibirski Huski je srednji radni pas, koji pripada porodici Spitz i poreklom je iz istočnog Sibira. Krzno mu je možda crno-belo, sivo-belo ili čak crveno-belo, dok boja očiju može biti plava, što je karakteristično za ovu rasu, ali i smeđe.',
      name: 'Sibirski haski'
    }, {
      image: "https://petface.net/wp-content/uploads/2015/01/staford-1.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Americki staford terijer'
    },]

  constructor() { }

  ngOnInit() {
  }


}
