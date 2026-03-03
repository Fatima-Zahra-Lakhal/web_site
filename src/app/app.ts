import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, ArrowUp } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LucideAngularModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Entreprise Website');
  ArrowUp = ArrowUp;
  showBackToTop: boolean = false;
  
  // Signal pour la langue (optionnel)
  currentLang = signal<'fr' | 'ar'>('fr');

  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.showBackToTop = scrollPosition > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Getter pour isArabic
  get isArabic(): boolean {
    return this.currentLang() === 'ar';
  }

  // Méthode pour changer la langue
  toggleLanguage() {
    this.currentLang.update(lang => lang === 'fr' ? 'ar' : 'fr');
  }
}