import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
import { 
  LucideAngularModule, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Calendar,
  Building2,
  Users,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Shield,
  Award,
  Star
} from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out', 
          style({ opacity: 1, transform: 'scale(1)' })
        )
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('800ms ease-out', 
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms ease-out', 
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ]),
    trigger('fadeInStagger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms {{delay}}ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ], { params: { delay: 0 } })
    ]),
    trigger('hoverSlide', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('hovered', style({ transform: 'translateX(10px)' })),
      transition('normal <=> hovered', animate('200ms ease-out'))
    ]),
    trigger('pulseAnimation', [
      transition('* => *', [
        animate('1s', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  // Icônes
  Mail = Mail;
  Phone = Phone;
  MapPin = MapPin;
  Send = Send;
  MessageSquare = MessageSquare;
  Calendar = Calendar;
  Building2 = Building2;
  Users = Users;
  FileText = FileText;
   ArrowRight = ArrowRight;
ArrowUpRight = ArrowUpRight;
Handshake = Handshake;
Shield = Shield;
Award = Award;
Star = Star;
  // Données du formulaire
  formData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  };

  // Informations de contact basées sur le PDF
  contactInfo: any[] = [];

  // Champ focus
  focusedField: string | null = null;
  
  // États hover
  hoverStates: { [key: string]: boolean } = {};

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.updateContactInfo();
    this.initializeHoverStates();
  }

  // Initialiser les états hover
  private initializeHoverStates() {
    // Pour les 3 cartes de contact
    for (let i = 0; i < 3; i++) {
      this.hoverStates[`info${i}`] = false;
    }
    // Pour les boutons
    this.hoverStates['chat'] = false;
    this.hoverStates['calendar'] = false;
  }

  // Mettre à jour les informations de contact quand la langue change
  private updateContactInfo() {
    this.contactInfo = [
      {
        icon: MapPin,
        label: this.getLocalizedText('Siège social', 'المقر الرئيسي'),
        value: 'LAMBDA SOFT',
        detail: '149, Boulevard Lalla Yacout, Casablanca',
        color: 'from-cyan-500 to-blue-500'
      },
      {
        icon: Phone,
        label: this.getLocalizedText('Téléphone', 'الهاتف'),
        value: '(0522) 31 31 25/32',
        detail: this.getLocalizedText('Lun-Ven, 9h-18h', 'الإثنين-الجمعة، ٩ص-٦م'),
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: Mail,
        label: 'Email',
        value: 'lambdasoft@menara.ma',
        detail: this.getLocalizedText('Réponse sous 24h', 'الرد خلال 24 ساعة'),
        color: 'from-amber-500 to-orange-500'
      }
    ];
  }

  // Getter pour la langue courante
  get currentLang() {
    return this.languageService.language();
  }

  // Getter pour vérifier si c'est l'arabe
  get isArabic(): boolean {
    return this.currentLang === 'ar';
  }

  // Getter pour la direction RTL/LTR
  get directionClass() {
    return this.isArabic ? 'rtl' : 'ltr';
  }

  // Gestionnaire de soumission
  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Formulaire soumis:', this.formData);
    
    // Message selon la langue
    const message = this.getLocalizedText(
      'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
      '! تم إرسال الرسالة بنجاح. سوف نقوم بالرد عليك في أقرب وقت ممكن'
    );
    
    alert(message);
    
    // Réinitialiser le formulaire
    this.formData = { name: '', email: '', company: '', phone: '', message: '' };
  }

  // Gestionnaire de focus
  onFocus(field: string): void {
    this.focusedField = field;
  }

  // Gestionnaire de blur
  onBlur(): void {
    this.focusedField = null;
  }

  // Gestionnaire hover
  setHover(element: string, isHovered: boolean): void {
    if (this.hoverStates.hasOwnProperty(element)) {
      this.hoverStates[element] = isHovered;
    }
  }

  // Méthode pour obtenir le texte selon la langue (déléguée au service)
  t(key: string): string {
    return this.languageService.t(key);
  }

  // Méthode utilitaire pour les textes conditionnels
  getLocalizedText(frText: string, arText: string): string {
    return this.isArabic ? arText : frText;
  }

  // Méthode pour obtenir la classe de délai d'animation
  getAnimationDelay(index: number): string {
    return `${index * 100}ms`;
  }

  // Méthode pour vérifier si un champ est focus
  isFieldFocused(field: string): boolean {
    return this.focusedField === field;
  }
}