import { Directive, OnInit, Input, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImageRotation]'
})
export class ImageRotationDirective implements OnInit {
  public rotationTime: any;
  @Input() rotationData: any;
  @HostBinding() src: string;
  constructor(public el: ElementRef) { }
  ngOnInit() {

    if (this.rotationData.rotationTime) {
      this.rotationTime = this.rotationData.rotationTime
    }
    else {
      this.rotationTime = '2000';
    }

    this.src = this.rotationData.image[0].src;

    if (this.rotationData.image.length > 1) {
      setInterval(() => {
        var randomItem = this.rotationData.image[Math.floor(Math.random() * this.rotationData.image.length)];
        this.src = randomItem.src;
      }, this.rotationTime);
    }
  }

}
