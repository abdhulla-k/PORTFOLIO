import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for @for (or ngFor)

@Component({
    selector: 'app-infinit-scroll-x',
    standalone: true, // If using Angular 15+ standalone components
    imports: [CommonModule],
    templateUrl: './infinit-scroll-x.component.html',
    styleUrls: ['./infinit-scroll-x.component.scss']
})
export class InfinitScrollXComponent implements OnInit, AfterViewInit {
    @Input() items: string[] = [
        'Software Engineer', 'Angular', 'Django', 'UI/UX Designer', 'Figma', 'MEAN Stack Developer', 'Node.js', 'Express',
        'Generative AI', 'Python', 'LangChain', 'AWS', 'Docker', 'Git', 'Nuxt.js', 'Full Stack Developer'
    ];
    @Input() duration: number = 20; // Animation duration in seconds (adjust for speed)
    @Input() itemGap: string = '1rem'; // Gap between items, e.g., '1rem', '20px'

    // Reference to the first complete group of items to measure its width
    @ViewChild('firstGroup') firstGroupRef!: ElementRef;

    // Reference to the main scrolling container (which holds both duplicated groups)
    @ViewChild('scrollingContainer') scrollingContainerRef!: ElementRef;

    isPaused: boolean = false; // State for hover effect

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        // No explicit duplication in TS array here; we duplicate in the template directly.
    }

    ngAfterViewInit(): void {
        // Ensure that the DOM elements are rendered before measuring
        if (this.firstGroupRef && this.scrollingContainerRef) {
            // Calculate the exact width of ONE full set of items
            // This is the distance the animation needs to travel for one complete loop
            const singleSetWidth = this.firstGroupRef.nativeElement.offsetWidth;

            // Apply CSS variables to the main scrolling container
            this.renderer.setStyle(
                this.scrollingContainerRef.nativeElement,
                '--scroll-width',
                `${singleSetWidth}px`
            );
            this.renderer.setStyle(
                this.scrollingContainerRef.nativeElement,
                '--animation-duration',
                `${this.duration}s`
            );
            this.renderer.setStyle(
                this.scrollingContainerRef.nativeElement,
                '--item-gap',
                this.itemGap
            );

            // FOR DEBUGGING: Log the calculated width
            console.log('Single set width calculated:', singleSetWidth, 'px');
            console.log('Animation duration:', this.duration, 's');
            console.log('Item Gap:', this.itemGap);
        } else {
            console.error("Refs not found or items array empty. Cannot set scroll width.");
        }
    }

    // HostListeners to pause/play animation on hover
    @HostListener('mouseenter')
    onMouseEnter() {
        this.isPaused = true;
        console.log('Animation paused.');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.isPaused = false;
        console.log('Animation resumed.');
    }
}