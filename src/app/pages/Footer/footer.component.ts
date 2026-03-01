import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
import { LucideAngularModule, Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', 
          style({ opacity: 1 })
        )
      ])
    ]),
    trigger('hoverScale', [
      state('normal', style({ transform: 'scale(1) translateY(0)' })),
      state('hovered', style({ transform: 'scale(1.1) translateY(-2px)' })),
      transition('normal <=> hovered', animate('200ms ease-out'))
    ]),
    trigger('tapScale', [
      state('normal', style({ transform: 'scale(1)' })),
      state('tapped', style({ transform: 'scale(0.95)' })),
      transition('normal <=> tapped', animate('100ms ease-out'))
    ]),
    trigger('arrowAnimation', [
      transition('* => *', [
        animate('1.5s', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-3px)', offset: 0.5 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class FooterComponent {
  // Icônes
  Github = Github;
  Linkedin = Linkedin;
  Twitter = Twitter;
  Mail = Mail;
  ArrowRight = ArrowRight;

  currentYear = new Date().getFullYear();

  // États hover pour les liens sociaux
  socialHoverStates: boolean[] = [false, false, false, false];
  
  // États hover pour les boutons
  buttonHoverState: 'normal' | 'hovered' = 'normal';
  buttonTapState: 'normal' | 'tapped' = 'normal';

  // Liens sociaux
  socialLinks = [
    { icon: Github, href: 'https://github.com', color: 'hover:text-cyan-500' },
    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-purple-500' },
    { icon: Mail, href: 'mailto:contact@lambdasoft.com', color: 'hover:text-pink-500' },
  ];

  // Navigation items (clés pour les traductions)
  navItems = ['home', 'services', 'about', 'contact'];

  // État hover pour chaque lien de navigation
  navHoverStates: boolean[] = new Array(4).fill(false);

  constructor(public languageService: LanguageService) {}

  // Getter pour la langue courante (signal)
  get currentLang() {
    return this.languageService.language();
  }

  // Getter pour la direction RTL/LTR
  get directionClass() {
    return this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  // Méthode pour remonter en haut de page
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Gestionnaire hover pour les liens sociaux
  setSocialHover(index: number, isHovered: boolean): void {
    if (index >= 0 && index < this.socialHoverStates.length) {
      this.socialHoverStates[index] = isHovered;
    }
  }

  // Gestionnaire hover pour les liens de navigation
  setNavHover(index: number, isHovered: boolean): void {
    if (index >= 0 && index < this.navHoverStates.length) {
      this.navHoverStates[index] = isHovered;
    }
  }

  // Gestionnaire hover pour le bouton
  setButtonHover(isHovered: boolean): void {
    this.buttonHoverState = isHovered ? 'hovered' : 'normal';
  }

  // Gestionnaire tap pour le bouton
  setButtonTap(isTapped: boolean): void {
    this.buttonTapState = isTapped ? 'tapped' : 'normal';
  }

  // Méthode pour obtenir le texte selon la langue (via le service)
  t(key: string): string {
    return this.languageService.t(key);
  }

  // Méthode pour le texte du bouton "Retour en haut"
  get backToTopText(): string {
    return this.currentLang === 'fr' ? 'Retour en haut' : 'العودة إلى الأعلى';
  }

  // Méthode pour l'adresse selon la langue
  get addressText(): string {
    return this.currentLang === 'fr' ? 'Alger, Algérie' : 'الجزائر، الجزائر';
  }

  // Méthode pour le titre Navigation
  get navTitle(): string {
    return this.currentLang === 'fr' ? 'Navigation' : 'التنقل';
  }

  // Méthode pour le titre Contact
  get contactTitle(): string {
    return this.currentLang === 'fr' ? 'Contact' : 'اتصل بنا';
  }
}