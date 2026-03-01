import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

// Correction de l'interface pour inclure les traductions
interface Project {
  title: { fr: string; ar: string };
  category: { fr: string; ar: string };
  description: { fr: string; ar: string };
  color: string;
  image: string;
  client?: { fr: string; ar: string };      // Optionnel avec traduction
  location?: { fr: string; ar: string };    // Optionnel avec traduction
  year?: string;                             // L'année reste la même
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
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
    trigger('cardHover', [
      state('normal', style({ 
        transform: 'scale(1)',
        boxShadow: '0 0 0 rgba(6, 182, 212, 0)'
      })),
      state('hovered', style({ 
        transform: 'scale(1.02)',
        boxShadow: '0 20px 40px -15px rgba(6, 182, 212, 0.3)'
      })),
      transition('normal <=> hovered', animate('300ms ease-out'))
    ]),
    trigger('buttonHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hovered', animate('200ms ease-out'))
    ]),
    trigger('contentSlide', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden <=> visible', animate('300ms ease-out'))
    ])
  ]
})
export class PortfolioComponent {
  ExternalLink = ExternalLink;
  Github = Github;

  // États hover pour chaque projet
  hoverStates: boolean[] = new Array(8).fill(false);
  
  // États hover pour les boutons
  buttonHoverStates: { [key: string]: boolean } = {};

  constructor(public languageService: LanguageService) {}

  projects: Project[] = [
    {
      title: { 
        fr: 'ERP RADEETM', 
        ar: 'نظام تخطيط موارد المؤسسة - راديت م' 
      },
      category: { 
        fr: 'ERP & Gestion', 
        ar: 'تخطيط موارد المؤسسة والإدارة' 
      },
      description: { 
        fr: 'Mise en place d\'un ERP de gestion intégrant comptabilité générale, achats et gestion de stock',
        ar: 'تنفيذ نظام تخطيط موارد المؤسسة الذي يدمج المحاسبة العامة والمشتريات وإدارة المخزون'
      },
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      client: { 
        fr: 'RADEETM', 
        ar: 'RADEETM' 
      },
      location: { 
        fr: 'Beni Mellal', 
        ar: 'بني ملال' 
      },
      year: '2012',
    },
    {
      title: { 
        fr: 'Système d\'Information BCMA', 
        ar: 'نظام المعلومات - BCMA' 
      },
      category: { 
        fr: 'Refonte SI', 
        ar: 'إعادة هيكلة نظم المعلومات' 
      },
      description: { 
        fr: 'Refonte complète du système d\'information couvrant toutes les activités métiers du domaine des assurances avec génération d\'un workflow',
        ar: 'إعادة هيكلة شاملة لنظام المعلومات يغطي جميع الأنشطة التجارية في مجال التأمين مع توليد سير العمل'
      },
      color: 'from-blue-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      client: { 
        fr: 'BCMA (Bureau Central Marocain des sociétés d\'assurances)', 
        ar: 'BCMA - المكتب المركزي المغربي لشركات التأمين' 
      },
      location: { 
        fr: 'Casablanca', 
        ar: 'الدار البيضاء' 
      },
      year: '2010-2011',
    },
    {
      title: { 
        fr: 'Comptabilité Budgétaire RADEEMA', 
        ar: 'المحاسبة الميزانياتية - RADEEMA' 
      },
      category: { 
        fr: 'Gestion Financière', 
        ar: 'الإدارة المالية' 
      },
      description: { 
        fr: 'Conception, développement et mise en place de la comptabilité budgétaire',
        ar: 'تصميم وتطوير وتنفيذ نظام المحاسبة الميزانياتية'
      },
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
      client: { 
        fr: 'RADEEMA', 
        ar: 'RADEEMA' 
      },
      location: { 
        fr: 'Marrakech', 
        ar: 'مراكش' 
      },
      year: '2011',
    },
    {
      title: { 
        fr: 'ERP Centres de Formation OFPPT', 
        ar: 'تخطيط موارد المؤسسة - مراكز التكوين OFPPT' 
      },
      category: { 
        fr: 'ERP & Gestion', 
        ar: 'تخطيط موارد المؤسسة والإدارة' 
      },
      description: { 
        fr: 'Informatisation de trois centres de formation avec mise en place d\'une solution ERP pour la gestion intégrée de centres pilotes',
        ar: 'حوسبة ثلاثة مراكز تكوين مع تنفيذ حل تخطيط موارد المؤسسة للإدارة المتكاملة للمراكز النموذجية'
      },
      color: 'from-pink-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      client: { 
        fr: 'OFPPT - Programme MEDA 2', 
        ar: 'OFPPT - برنامج MEDA 2' 
      },
      location: { 
        fr: 'Casablanca', 
        ar: 'الدار البيضاء' 
      },
      year: '2006',
    },
    {
      title: { 
        fr: 'Centres Techniques MEDA II', 
        ar: 'المراكز التقنية - MEDA II' 
      },
      category: { 
        fr: 'Solutions Intégrées', 
        ar: 'حلول متكاملة' 
      },
      description: { 
        fr: 'Informatisation de 5 centres techniques spécialisés avec mise en place d\'une solution intégrée de gestion',
        ar: 'حوسبة 5 مراكز تقنية متخصصة مع تنفيذ حل متكامل للإدارة'
      },
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      client: { 
        fr: 'Ministère du commerce & de l\'industrie', 
        ar: 'وزارة التجارة والصناعة' 
      },
      location: { 
        fr: 'Casablanca', 
        ar: 'الدار البيضاء' 
      },
      year: '2005',
    },
    {
      title: { 
        fr: 'SI Délégation ONUDI', 
        ar: 'نظام المعلومات - وفد ONUDI' 
      },
      category: { 
        fr: 'Systèmes d\'Information', 
        ar: 'نظم المعلومات' 
      },
      description: { 
        fr: 'Développement et mise en place des systèmes d\'information et de communication pour assurer une autonomie de gestion et indépendance décisionnelle',
        ar: 'تطوير وتنفيذ نظم المعلومات والاتصالات لضمان استقلالية الإدارة والاستقلالية في اتخاذ القرارات'
      },
      color: 'from-red-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      client: { 
        fr: 'ONUDI (Organisation des Nations Unies)', 
        ar: 'ONUDI - منظمة الأمم المتحدة للتنمية الصناعية' 
      },
      location: { 
        fr: 'Rabat', 
        ar: 'الرباط' 
      },
      year: '2002',
    },
    {
      title: { 
        fr: 'SI Régional ONUDI', 
        ar: 'نظام المعلومات الإقليمي - ONUDI' 
      },
      category: { 
        fr: 'Gouvernance Industrielle', 
        ar: 'الحوكمة الصناعية' 
      },
      description: { 
        fr: 'Conception d\'un système d\'information régional fiable comme outil de gouvernance industrielle',
        ar: 'تصميم نظام معلومات إقليمي موثوق كأداة للحوكمة الصناعية'
      },
      color: 'from-rose-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      client: { 
        fr: 'ONUDI (Organisation des Nations Unies)', 
        ar: 'ONUDI - منظمة الأمم المتحدة للتنمية الصناعية' 
      },
      location: { 
        fr: 'Rabat', 
        ar: 'الرباط' 
      },
      year: '2002',
    },
    {
      title: { 
        fr: 'Audit Modernisation Judiciaire', 
        ar: 'تدقيق تحديث القضاء' 
      },
      category: { 
        fr: 'Audit & Conseil', 
        ar: 'التدقيق والاستشارات' 
      },
      description: { 
        fr: 'Audit financier et technique des systèmes du projet modernisation des juridictions au Maroc',
        ar: 'التدقيق المالي والتقني لأنظمة مشروع تحديث المحاكم في المغرب'
      },
      color: 'from-cyan-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      client: { 
        fr: 'Ministère de la justice', 
        ar: 'وزارة العدل' 
      },
      location: { 
        fr: 'Rabat, Casablanca', 
        ar: 'الرباط، الدار البيضاء' 
      },
      year: '2008',
    },
  ];

  // Getter pour la langue courante
  get currentLang() {
    return this.languageService.language();
  }

  // Getter pour la direction RTL/LTR
  get directionClass() {
    return this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  // Méthode pour obtenir le texte selon la langue
  getText(textObj: any): string {
    if (!textObj) return '';
    return this.currentLang === 'fr' ? textObj.fr : textObj.ar;
  }

  // Gestionnaire hover pour les cartes
  setHover(index: number, isHovered: boolean): void {
    this.hoverStates[index] = isHovered;
  }

  // Gestionnaire hover pour les boutons
  setButtonHover(projectIndex: number, buttonType: string, isHovered: boolean): void {
    const key = `${projectIndex}-${buttonType}`;
    this.buttonHoverStates[key] = isHovered;
  }

  // Vérifier si un bouton est survolé
  isButtonHovered(projectIndex: number, buttonType: string): boolean {
    const key = `${projectIndex}-${buttonType}`;
    return this.buttonHoverStates[key] || false;
  }
}