import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements AfterViewInit {
  @ViewChild('scrollLimit') scrollLimitRef!: ElementRef;

  ngAfterViewInit(): void {
    const scrollContainer = this.scrollLimitRef.nativeElement;
    const scrollTopValue = scrollContainer.scrollTop;
    console.log('Valor del desplazamiento:', scrollTopValue);
  }

  constructor(){

  }

  ScrollAnimation(event: Event, p1: HTMLDivElement, p2: HTMLDivElement){
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollTop;
    // console.log(scrollPosition);
    console.log("p1 -> ", p1.getBoundingClientRect().y);
    console.log("p2 -> ", p2.getBoundingClientRect().y);
    console.log("windowX", window.screen.height);

    if(p1.getBoundingClientRect().y <= (window.screen.height-100)){
      p1.setAttribute("class", "animation-top-slide");
    }
    if(p2.getBoundingClientRect().y <= (window.screen.height-100)){
      p2.setAttribute("class", "animation-top-slide");
    }

    // const positionY = scroll.scrollHeight;
    // console.log(scroll.scrollHeight)
    // console.log(scroll.scrollTop)
    // console.log(scroll.scrollWidth)
    // if(positionY < scrollPosition){
    //   console.log(scrollPosition, positionY);
    //   scroll.setAttribute("class" , "animation-top-slide");
    // }
  }
}
