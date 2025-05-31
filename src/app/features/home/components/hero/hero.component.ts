import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, signal, ViewChildren } from '@angular/core';

import { gsap } from "gsap";
import { SectionLayoutComponent } from "../../../../layouts/section-layout/section-layout.component";

@Component({
    selector: 'app-hero',
    imports: [CommonModule, SectionLayoutComponent],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
    @ViewChildren('skillItem', { read: ElementRef }) skillItems!: QueryList<ElementRef>;
    skills = signal([
        "Software Development",
        "UI/UX Designing",
        "Mobile App Development",
        "Gen AI Workflow",
        "Mentorship"
    ])
    selectedIndex: number = 0;
    previousSelectedIndex: number = -1;

    ngAfterViewInit() {
        this.selectSkill(this.selectedIndex);
    }

    selectSkill(index: number) {
        if (!this.skillItems.length) {
            return;
        }
        const element = this.skillItems.get(index);
        if (element) {
            const bar = element.nativeElement.childNodes[0];
            const text = element.nativeElement.childNodes[1];
            let preBar: any = null;
            let preText: any = null;
            const tl = gsap.timeline({
                paused: true,
                onComplete: () => {
                    setTimeout(() => {
                        this.previousSelectedIndex = index;
                        this.selectSkill(this.getIndex(index))
                    }, 2000)
                }
            })

            if (this.previousSelectedIndex >= 0) {
                const preElement = this.skillItems.get(this.previousSelectedIndex);
                preBar = preElement?.nativeElement.childNodes[0]
                preText = preElement?.nativeElement.childNodes[1]
            }

            tl.to(bar, {
                background: 'black',
                duration: 0.8
            })
                .to(text, {
                    color: "black",
                    duration: 0.8
                }, "<")

            if (preBar && preText) {
                tl.to(preBar, {
                    background: "rgba(0, 0, 0, 0.2)",
                    duration: 0.8
                }, "<")
                    .to(preText, {
                        color: "rgba(0, 0, 0, 0.2)",
                        duration: 0.8
                    }, "<")
            }


            tl.play()
        }
    }

    getIndex(index: number) {
        if (index < this.skillItems.length - 1) {
            return ++index;
        } else {
            return 0;
        }
    }

}
