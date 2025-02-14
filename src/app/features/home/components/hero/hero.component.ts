import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, signal } from '@angular/core';

import { gsap } from "gsap";

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  hilights = signal([
    "FULL STACK DEVELOPER",
    "UI/UX DESIGNER",
    "MEAVN STACK DEVELOPER"
  ])
  currentIndex = -1;
  isInitialAnimation = 0;

  ngAfterViewInit() {
    this.startAnimation();
  }

  getText(index: number) {
    return this.hilights()[index].split(' ').map(word => word.split(''));
  }

  startAnimation() {
    this.addText().then(() => {
      setTimeout(() => {
        this.removeText().then(() => {
            // set a value that never be an index value of hilights
            this.isInitialAnimation = -2;
          this.startAnimation();
        })
      }, 3000)
    })
  }

  addText() {
    this.currentIndex = this.findNextIndex(this.currentIndex);

    const pr = new Promise((resolve, reject) => {
      let tl = gsap.timeline({
        paused: true,
        onComplete: () => resolve(true),
        onErrorCaptured: (error: any) => reject({ status: "error", error })
      })

      try {
        tl.fromTo(`.text-spn${this.currentIndex}`, 
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger:{
              each: 0.1,
              from: 'start'
            },
            duration: 1,
            ease: 'power2.inOut'
          }
        );
      } catch (error) {
        reject(error);
      }
      
      tl.play();
    })

    return pr;
  }

  removeText() {
    const pr = new Promise((resolve, reject) => {
      let tl = gsap.timeline({ 
        paused: true,
        onComplete: () => resolve(true),
        onErrorCaptured: (error: any) => reject({ status: "error", error })
      });

      try {
        tl.fromTo(`.text-spn${this.currentIndex}`, 
          {
            opacity: 1,
          },
          {
            opacity: 0,
            stagger:{
              each: 0.1,
              from: 'random'
            },
            duration: 1,
            ease: 'power2.inOut'
          }
        );
      } catch (error) {
        reject(error);
      }
      
      tl.play();
    })
    
    return pr;
  }
  
  findNextIndex(index: number = 0) {
    if (index === this.hilights().length - 1) {
      return 0
    }

    return index + 1
  }
}
