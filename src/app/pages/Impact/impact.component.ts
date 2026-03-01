import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';
import { LucideAngularModule, TrendingUp, Award, Users, Clock, Target, Zap } from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('staggerBars', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-30px)' }),
          stagger('150ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('progressFill', [
      state('void', style({ width: '0%' })),
      state('*', style({ width: '{{percentage}}%' }), { params: { percentage: 0 } }),
      transition('void => *', [
        style({ width: '0%' }),
        animate('1500ms ease-out')
      ])
    ])
  ]
})
export class ImpactComponent {
  // Icônes
  TrendingUp = TrendingUp;
  Award = Award;
  Users = Users;
  Clock = Clock;
  Target = Target;
  Zap = Zap;

  constructor(public languageService: LanguageService) {}

  get currentLang(): string {
    return this.languageService.language();
  }

  // Données d'impact avec barres de progression - Version bilingue
  impactData = [
    {
      icon: Clock,
      label: { fr: 'Expérience', ar: 'الخبرة' },
      value: '35+',
      description: { fr: "années d'expertise", ar: 'سنوات من الخبرة' },
      percentage: 100,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/20'
    },
    {
      icon: TrendingUp,
      label: { fr: 'Projets', ar: 'المشاريع' },
      value: '50+',
      description: { fr: 'projets réalisés', ar: 'مشروع مكتمل' },
      percentage: 80,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: Users,
      label: { fr: 'Experts', ar: 'الخبراء' },
      value: '6',
      description: { fr: 'experts permanents', ar: 'خبير دائم' },
      percentage: 60,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20'
    },
    {
      icon: Award,
      label: { fr: 'Satisfaction', ar: 'الرضا' },
      value: '100%',
      description: { fr: 'clients satisfaits', ar: 'عملاء راضون' },
      percentage: 100,
      color: 'from-pink-500 to-orange-500',
      bgColor: 'bg-pink-500/20'
    },
    {
      icon: Target,
      label: { fr: 'Capital', ar: 'رأس المال' },
      value: '300K',
      description: { fr: 'DH de capital', ar: 'درهم مغربي' },
      percentage: 90,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20'
    },
    {
      icon: Zap,
      label: { fr: 'Performance', ar: 'الأداء' },
      value: '98%',
      description: { fr: 'délais respectés', ar: 'المواعيد النهائية المحترمة' },
      percentage: 98,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-500/20'
    }
  ];

  // Valeurs clés (pour les cercles) - Version bilingue
  keyValues = [
    { value: '1989', label: { fr: 'Année de création', ar: 'سنة التأسيس' }, color: 'from-cyan-500 to-blue-500' },
    { value: '6', label: { fr: 'Experts', ar: 'خبراء دائمون' }, color: 'from-blue-500 to-purple-500' },
    { value: '50+', label: { fr: 'Projets', ar: 'مشروع' }, color: 'from-purple-500 to-pink-500' },
    { value: '100%', label: { fr: 'Satisfaction', ar: 'رضا العملاء' }, color: 'from-pink-500 to-orange-500' }
  ];

  // Méthode utilitaire pour obtenir le texte selon la langue
  getText(textObj: any): string {
    if (!textObj) return '';
    return this.currentLang === 'fr' ? textObj.fr : textObj.ar;
  }
}