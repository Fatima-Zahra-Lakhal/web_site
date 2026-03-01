import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { LanguageService } from '../../core/services/language.service';
import { LucideAngularModule, Sparkles, Zap } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroComponent implements AfterViewInit, OnDestroy {

  @ViewChild('section') section!: ElementRef;
  Sparkles = Sparkles;
  Zap = Zap;
  particles: { left: number; top: number; duration: number }[] = [];
  private scrollHandler!: () => void;

  constructor(public languageService: LanguageService) {
    this.generateParticles();
  }

  generateParticles() {
    this.particles = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2
    }));
  }

  ngAfterViewInit(): void {
    this.scrollHandler = () => {
      const offset = window.scrollY * 0.4;
      if (this.section) {
        this.section.nativeElement.style.backgroundPositionY = `${offset}px`;
      }
    };

    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}