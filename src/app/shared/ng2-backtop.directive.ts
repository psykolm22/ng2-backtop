import {Component, Directive, Input, Output, ElementRef, EventEmitter, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'backtop', 
  template: '<div id="backtop" class="{{theme}} {{class}}"><button><i class="fa fa-chevron-up"></i></button></div>',
   styleUrls: ['ng2-backtop.css']

})
export class BacktopDirective {
  @Input('scrollspeed') speed;
  @Input('buttontheme') theme;
  class:string;
constructor(private el: ElementRef) {
    this.el = el
    var self = this;
    window.addEventListener('scroll', function () {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    self.class= "show";
                } else {
                    self.class= "";
                }
            });
}


@HostListener('click', ['$event.target']) onClick(btn) {
    this.smoothScroll()
    this.class="";
  }



currentYPosition() {
                if (self.pageYOffset)
                    return self.pageYOffset;
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                if (document.body.scrollTop)
                    return document.body.scrollTop;
                return 0;
            };
 smoothScroll() {
                var startY = this.currentYPosition();
                var stopY = 0;
                var distance = stopY > startY ? stopY - startY : startY - stopY;
                if (distance < 100) {
                    scrollTo(0, stopY);
                    return;
                }
                var speed = this.speed  ? Math.round(this.speed / 100) : 6 ;
                var step = Math.round(distance / 25);
                var leapY = stopY > startY ? startY + step : startY - step;
                var timer = 0;
                if (stopY > startY) {
                    for (var i = startY; i < stopY; i += step) {
                        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                        leapY += step;
                        if (leapY > stopY) leapY = stopY;
                        timer++;
                    }
                    return;
                }
                for (var j = startY; j > stopY; j -= step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY -= step;
                    if (leapY < stopY) leapY = stopY;
                    timer++;
                }
            };


}