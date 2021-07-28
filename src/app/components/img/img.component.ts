import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img);
  }

}
