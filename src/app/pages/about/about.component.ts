import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { 
  LucideAngularModule, 
  Award, Users, Briefcase, TrendingUp, Target, Rocket,
  Code2, Palette, Zap, Shield, Smartphone, Globe, Brain, Cloud,
  Sparkles, Cpu, Gauge, Lock, CircuitBoard, Building2, Calendar,
  MapPin, Phone, Mail, Clock, Database, Server, Network
} from 'lucide-angular';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-60px)' }),
        animate('700ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ]),
    trigger('fadeRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(60px)' }),
        animate('700ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ])
    ]),
    trigger('pulseGlow', [
      transition(':enter', [
        style({ opacity: 0, scale: 0.8 }),
        animate('1s ease-out', style({ opacity: 1, scale: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {
  // Icônes
  Award = Award;
  Users = Users;
  Briefcase = Briefcase;
  TrendingUp = TrendingUp;
  Target = Target;
  Rocket = Rocket;
  
  // Nouvelles icônes
  Code2 = Code2;
  Palette = Palette;
  Zap = Zap;
  Shield = Shield;
  Smartphone = Smartphone;
  Globe = Globe;
  Brain = Brain;
  Cloud = Cloud;
  Sparkles = Sparkles;
  Cpu = Cpu;
  Gauge = Gauge;
  Lock = Lock;
  CircuitBoard = CircuitBoard;
  Building2 = Building2;
  Calendar = Calendar;
  MapPin = MapPin;
  Phone = Phone;
  Mail = Mail;
  Clock = Clock;
  Database = Database;
  Server = Server;
  Network = Network;

  constructor(public languageService: LanguageService) {}

  // STATISTIQUES RÉELLES DE LAMBDA SOFT avec traduction
  stats = [
    { 
      icon: Calendar, 
      value: '1989', 
      key: 'founded', 
      color: 'from-cyan-500 to-blue-500', 
      label: { fr: 'Année de création', ar: 'سنة التأسيس' },
      description: { fr: 'Plus de 35 ans d\'expertise', ar: 'أكثر من 35 عامًا من الخبرة' }
    },
    { 
      icon: Briefcase, 
      value: '50+', 
      key: 'projects', 
      color: 'from-blue-500 to-purple-500', 
      label: { fr: 'Projets réalisés', ar: 'مشاريع منجزة' },
      description: { fr: 'Dans divers secteurs', ar: 'في مختلف القطاعات' }
    },
    { 
      icon: Users, 
      value: '6', 
      key: 'team', 
      color: 'from-purple-500 to-pink-500', 
      label: { fr: 'Experts permanents', ar: 'خبراء دائمون' },
      description: { fr: 'Ingénieurs, développeurs, gestionnaires', ar: 'مهندسون، مطورون، مديرون' }
    },
    { 
      icon: Building2, 
      value: '300K', 
      key: 'capital', 
      color: 'from-pink-500 to-orange-500', 
      label: { fr: 'Capital (DH)', ar: 'رأس المال (درهم)' },
      description: { fr: 'Société stable et solide', ar: 'شركة مستقرة وقوية' }
    },
  ];

  // INFORMATIONS DE CONTACT RÉELLES du PDF
  contactInfo = [
    { icon: MapPin, label: { fr: 'Siège social', ar: 'المقر الرئيسي' }, value: '149, Boulevard Lalla Yacout, Casablanca' },
    { icon: Phone, label: { fr: 'Téléphone', ar: 'الهاتف' }, value: '(0522) 31 31 25 / 32' },
    { icon: Mail, label: { fr: 'Email', ar: 'البريد الإلكتروني' }, value: 'lambdasoft@menara.ma' },
    { icon: Clock, label: { fr: 'Activité depuis', ar: 'النشاط منذ' }, value: '1989' },
  ];

  // VALEURS FONDAMENTALES de Lambda Soft avec traduction
  coreValues = [
    { 
      icon: Shield, 
      title: { fr: 'Qualité de service', ar: 'جودة الخدمة' },
      description: { fr: 'Excellence dans chaque projet', ar: 'التميز في كل مشروع' }
    },
    { 
      icon: Target, 
      title: { fr: 'Délai d\'exécution', ar: 'احترام المواعيد' },
      description: { fr: 'Respect des engagements', ar: 'الالتزام بالوعود' }
    },
    { 
      icon: Rocket, 
      title: { fr: 'Pérennité du projet', ar: 'استدامة المشروع' },
      description: { fr: 'Solutions durables et évolutives', ar: 'حلول مستدامة وقابلة للتطوير' }
    },
  ];

  // TECHNOLOGIES MAÎTRISÉES (section 1.5 du PDF) - Noms techniques non traduits
  technologies = [
    { icon: Database, name: 'SQL Server', category: { fr: 'SGBDR', ar: 'نظام إدارة قواعد البيانات' } },
    { icon: Database, name: 'ORACLE', category: { fr: 'SGBDR', ar: 'نظام إدارة قواعد البيانات' } },
    { icon: Server, name: 'UNIX', category: { fr: 'Plateforme', ar: 'منصة' } },
    { icon: Server, name: 'NT', category: { fr: 'Plateforme', ar: 'منصة' } },
    { icon: Code2, name: 'VB', category: { fr: 'Développement', ar: 'تطوير' } },
    { icon: Code2, name: '.NET', category: { fr: 'Développement', ar: 'تطوير' } },
    { icon: Network, name: 'MERISE', category: { fr: 'Méthode', ar: 'منهجية' } },
  ];

  // PRODUITS & SOLUTIONS (section 1.3 du PDF) avec traduction
  products = [
    { fr: 'Comptabilité Générale/Analytique/Budgétaire', ar: 'المحاسبة العامة/التحليلية/الميزانياتية' },
    { fr: 'Gestion des Immobilisations', ar: 'إدارة الأصول الثابتة' },
    { fr: 'Gestion de Trésorerie', ar: 'إدارة الخزينة' },
    { fr: 'Gestion des Ressources Humaines & Paie', ar: 'إدارة الموارد البشرية والرواتب' },
    { fr: 'Gestion Commerciale & Marketing', ar: 'الإدارة التجارية والتسويق' },
    { fr: 'Gestion de Stock & Traçabilité', ar: 'إدارة المخزون والتتبع' },
    { fr: 'GPAO & Production', ar: 'إدارة الإنتاج' },
    { fr: 'Gestion Médicale (Orthopédie)', ar: 'الإدارة الطبية (جراحة العظام)' },
    { fr: 'anàam.com - Solutions Agroalimentaires', ar: 'أنعام.كوم - حلول الصناعات الغذائية' },
    { fr: 'Gestion de Parc Auto', ar: 'إدارة أسطول السيارات' },
  ];

  // SECTEURS D'ACTIVITÉ CLIENTS avec traduction
  clientSectors = [
    { fr: 'Administrations publiques', ar: 'الإدارات العامة' },
    { fr: 'Grandes entreprises', ar: 'الشركات الكبرى' },
    { fr: 'PME/PMI', ar: 'المقاولات الصغرى والمتوسطة' },
    { fr: 'Organismes internationaux (ONUDI)', ar: 'المنظمات الدولية (ONUDI)' },
    { fr: 'Établissements financiers (BCMA)', ar: 'المؤسسات المالية (BCMA)' },
    { fr: 'Régies (RADEEMA, RADEETM)', ar: 'وكالات التوزيع (RADEEMA, RADEETM)' },
    { fr: 'Ministères', ar: 'الوزارات' },
    { fr: 'Centres de formation (OFPPT)', ar: 'مراكز التكوين (OFPPT)' },
  ];

  // Orbites avec icônes (représentant les domaines d'expertise) avec traduction
  orbitItems = [
    { icon: Code2, label: { fr: 'Développement', ar: 'تطوير' }, color: 'from-cyan-400 to-blue-400' },
    { icon: Database, label: { fr: 'SGBDR', ar: 'قواعد البيانات' }, color: 'from-purple-400 to-pink-400' },
    { icon: Shield, label: { fr: 'Sécurité', ar: 'أمن المعلومات' }, color: 'from-green-400 to-emerald-400' },
    { icon: Brain, label: { fr: 'Conseil', ar: 'استشارات' }, color: 'from-yellow-400 to-orange-400' },
    { icon: Cloud, label: { fr: 'Infrastructure', ar: 'بنية تحتية' }, color: 'from-blue-400 to-indigo-400' },
    { icon: Network, label: { fr: 'Réseaux', ar: 'شبكات' }, color: 'from-teal-400 to-cyan-400' },
    { icon: Server, label: { fr: 'Serveurs', ar: 'خوادم' }, color: 'from-violet-400 to-purple-400' },
    { icon: Globe, label: { fr: 'International', ar: 'دولي' }, color: 'from-sky-400 to-blue-400' }
  ];

  // Éléments décoratifs
  floatingElements = [
    { icon: Sparkles, delay: '0s', duration: '3s' },
    { icon: Cpu, delay: '1s', duration: '4s' },
    { icon: Database, delay: '2s', duration: '3.5s' },
    { icon: CircuitBoard, delay: '0.5s', duration: '4.5s' }
  ];

  // Méthode utilitaire pour obtenir le texte selon la langue
  getText(textObj: any): string {
    if (!textObj) return '';
    return this.languageService.language() === 'fr' ? textObj.fr : textObj.ar;
  }
}