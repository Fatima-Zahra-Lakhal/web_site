import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { LucideAngularModule, Plus,  
  Minus, 
  HelpCircle,
  ArrowRight  } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('{{duration}}ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ], { params: { duration: 600 } })
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out', 
          style({ opacity: 1, transform: 'scale(1)' })
        )
      ])
    ]),
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ]),
    trigger('rotateIcon', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ]),
    trigger('hoverEffect', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('hovered', style({ transform: 'translateX(5px)' })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class FAQComponent {
  Plus = Plus;
  Minus = Minus;
HelpCircle = HelpCircle;
ArrowRight = ArrowRight;
  openIndex: number | null = 0;
  hoverStates: boolean[] = [];

  faqData = {
    fr: [
      {
        question: 'Quels types de projets développez-vous ?',
        answer: 'Nous développons des applications web, mobiles (iOS/Android), des solutions cloud, et proposons du conseil IT. Chaque projet est adapté aux besoins spécifiques de nos clients.',
      },
      {
        question: 'Quel est le délai moyen pour un projet ?',
        answer: 'Le délai varie selon la complexité du projet. Un site web peut prendre 4-8 semaines, tandis qu\'une application mobile complexe peut nécessiter 3-6 mois. Nous établissons un planning détaillé dès le début.',
      },
      {
        question: 'Proposez-vous un support après livraison ?',
        answer: 'Oui, nous offrons un support technique et une maintenance continue. Nous proposons différents plans de maintenance adaptés à vos besoins et votre budget.',
      },
      {
        question: 'Travaillez-vous avec des startups ?',
        answer: 'Absolument ! Nous adorons travailler avec des startups. Nous proposons des solutions flexibles et évolutives adaptées aux budgets et aux besoins des jeunes entreprises.',
      },
      {
        question: 'Comment se déroule un projet avec Lambda Soft ?',
        answer: 'Nous suivons une méthodologie agile : découverte et analyse, design et prototypage, développement itératif, tests qualité, déploiement et support continu.',
      },
    ],
    ar: [
      {
        question: 'ما أنواع المشاريع التي تطورونها؟',
        answer: 'نطور تطبيقات الويب والجوال (iOS/Android) وحلول السحابة، ونقدم استشارات تقنية. كل مشروع يتم تخصيصه حسب احتياجات عملائنا.',
      },
      {
        question: 'ما هو المدى الزمني المتوسط للمشروع؟',
        answer: 'يختلف الوقت حسب تعقيد المشروع. قد يستغرق موقع الويب 4-8 أسابيع، بينما قد يحتاج تطبيق جوال معقد إلى 3-6 أشهر. نحدد جدول زمني مفصل من البداية.',
      },
      {
        question: 'هل تقدمون الدعم بعد التسليم؟',
        answer: 'نعم، نقدم دعمًا تقنيًا وصيانة مستمرة. لدينا خطط صيانة مختلفة تناسب احتياجاتك وميزانيتك.',
      },
      {
        question: 'هل تعملون مع الشركات الناشئة؟',
        answer: 'بالتأكيد! نحب العمل مع الشركات الناشئة. نقدم حلولاً مرنة وقابلة للتطوير تتناسب مع ميزانيات واحتياجات الشركات الجديدة.',
      },
      {
        question: 'كيف يتم سير المشروع مع لامدا سوفت؟',
        answer: 'نتبع منهجية رشيقة: الاكتشاف والتحليل، التصميم والنماذج، التطوير التكراري، اختبارات الجودة، النشر والدعم المستمر.',
      },
    ],
  };

  constructor(public languageService: LanguageService) {
    // Initialiser les hover states après avoir les FAQs
    setTimeout(() => {
      this.hoverStates = new Array(this.faqs.length).fill(false);
    });
  }

  // CORRECTION: Utiliser language() au lieu de currentLang
  get faqs() {
    return this.languageService.language() === 'fr' ? this.faqData.fr : this.faqData.ar;
  }

  // CORRECTION: Méthode pour obtenir la langue courante
  get currentLang() {
    return this.languageService.language();
  }

  toggleFAQ(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  setHover(index: number, isHovered: boolean): void {
    if (this.hoverStates[index] !== undefined) {
      this.hoverStates[index] = isHovered;
    }
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getDirectionClass(): string {
    return this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }
}