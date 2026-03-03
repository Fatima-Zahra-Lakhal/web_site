import { Injectable, signal, effect } from '@angular/core';

export type Language = 'fr' | 'ar';

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.portfolio': 'Réalisations',
    'nav.partners': 'Partenaires',
    'nav.impact': 'Impact',
    'nav.expertise': 'Expertise', 

    // Hero
    'hero.title': 'Solutions Logicielles',
    'hero.subtitle': 'Innovantes',
    'hero.description': 'Transformez votre entreprise avec des solutions logicielles sur mesure. Lambda Soft, expert en innovation digitale, vous accompagne dans votre transformation numérique pour maximiser votre performance et votre compétitivité.',
    'hero.cta': 'Découvrir nos services',
    'hero.contact': 'Nous contacter',
    'hero.scroll': 'Défiler', // Ajouté
    'hero.stats.projects': 'Projets', // Ajouté
    'hero.stats.clients': 'Clients', // Ajouté
    'hero.stats.years': 'Années',
    // Services
    'services.title': 'Nos Services',
    'services.badge': 'SERVICES', 
'services.subtitle': 'Nous concevons des solutions digitales adaptées à votre activité afin de maximiser votre efficacité, renforcer votre compétitivité et soutenir votre développement.',
    'services.dev.title': 'Développement d\'applications',
    'services.dev.description': 'Solutions digitales sur mesure, combinant expertise technique et connaissance métier pour répondre à vos besoins spécifiques.',
    'services.security.title': 'Sécurité des applications',
    'services.security.description': 'Audit, tests d\'intrusion, développement sécurisé et formation pour protéger vos applications contre les menaces.',
    'services.engineering.title': 'Ingénierie de produits logiciels',
    'services.engineering.description': 'Du développement MVP au support post-lancement, nous accélérons la mise sur le marché de vos produits.',
    'services.consulting.title': 'Audit & Conseil IT',
    'services.consulting.description': 'Études, schémas directeurs (SDSI), audit financier et technique pour optimiser votre système d\'information.',
    'services.training.title': 'Formation & Infographie',
    'services.training.description': 'Formation des équipes sur les SI et logiciels, services d\'infographie et création de supports visuels.',
    'services.subcontracting.title': 'Sous-traitance de projets',
    'services.subcontracting.description': 'Prise en charge partielle ou totale de projets avec SGBDR, outils de développement et méthodes reconnus.',
    'services.viewAll': 'Voir tous les services',
     'services.learnMore': 'En savoir plus',

    // About
    'about.title': 'À Propos de Lambda Soft',
    'about.subtitle': 'Votre partenaire technologique',
    'about.description': 'La société LAMBDA SOFT est une entreprise spécialisée dans le développement de solutions informatiques et l’intégration de systèmes d’information dédiés à la gestion des entreprises et des administrations. Créée en 1989, elle accompagne ses clients dans leur transformation digitale en proposant des services complets allant du conseil et de l’étude des besoins jusqu’au développement, à la mise en place et à la maintenance de solutions informatiques adaptées. Grâce à une équipe composée d’ingénieurs, de développeurs et de gestionnaires qualifiés, LAMBDA SOFT met son expertise au service des PME, des grandes entreprises et des organismes publics. Son objectif principal est d’offrir des solutions performantes, durables et personnalisées, tout en garantissant qualité, respect des délais et satisfaction client.',
    'about.experience': 'années d\'expérience',
    'about.projects': 'projets réalisés',
    'about.clients': 'clients satisfaits',
    'impact.projects': 'Projets réalisés',
    'impact.clients': 'Clients satisfaits',
    'impact.experience': 'Années d\'expérience',
    'impact.partners': 'Partenaires',
    'impact.countries': 'Pays',
    'impact.satisfaction': 'Taux de satisfaction',
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Parlons de votre projet',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.info': 'Informations de contact',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.description': 'Solutions logicielles innovantes pour votre entreprise',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.portfolio': 'أعمالنا',
    'nav.partners': 'آراء اشركاؤنا',
    'nav.impact': 'الأثر',
    'nav.expertise': 'الخبرة',
    // Hero
    'hero.title': 'حلول برمجية',
    'hero.subtitle': 'مبتكرة',
   'hero.description': 'حوّل عملك بحلول برمجية مخصصة. LAMBDA SOFT ترافقك في تحولك الرقمي. ندمج الإبداع بالتكنولوجيا لبناء مستقبل رقمي أقوى.',
    'hero.cta': 'اكتشف خدماتنا',
    'hero.contact': 'اتصل بنا',
    'hero.scroll': 'مرر للأسفل', // Ajouté
    'hero.stats.projects': 'مشروع', // Ajouté
    'hero.stats.clients': 'عميل', // Ajouté
    'hero.stats.years': 'سنة', // Ajouté 
    // Services
    'services.title': 'خدماتنا',
    'services.badge': 'خدمات',
  'services.subtitle': 'نطوّر حلولاً متكاملة ومرنة تتناسب مع طبيعة نشاطك، بهدف تعزيز الكفاءة وتحقيق أفضل النتائج.',
    'services.dev.title': 'تطوير التطبيقات',
    'services.dev.description': 'حلول رقمية مخصصة تجمع بين الخبرة التقنية ومعرفة المجال لتلبية احتياجاتك الخاصة.',
    'services.security.title': 'أمن التطبيقات',
    'services.security.description': 'تدقيق واختبار الاختراق والتطوير الآمن والتدريب لحماية تطبيقاتك من التهديدات.',
    'services.engineering.title': 'هندسة المنتجات البرمجية',
    'services.engineering.description': 'من تطوير MVP إلى دعم ما بعد الإطلاق، نسارع بطرح منتجاتك في السوق.',
    'services.consulting.title': 'استشارات تقنية المعلومات',
    'services.consulting.description': 'دراسات وخطط توجيهية (SDSI) وتدقيق مالي وتقني لتحسين نظام المعلومات الخاص بك.',
    'services.training.title': 'التدريب والتصميم الجرافيكي',
    'services.training.description': 'تدريب الفرق على نظم المعلومات والبرمجيات وخدمات التصميم الجرافيكي وإنشاء المواد البصرية.',
    'services.subcontracting.title': 'مقاولات المشاريع',
    'services.subcontracting.description': 'تولي مشاريع جزئية أو كاملة باستخدام SGBDR وأدوات التطوير والمنهجيات المعترف بها.',
    'services.viewAll': 'عرض جميع الخدمات',
       'services.learnMore': 'اعرف المزيد',
 'impact.projects': 'مشروع منجز',
    'impact.clients': 'عميل راضٍ',
    'impact.experience': 'سنة خبرة',
    'impact.partners': 'شريك',
    'impact.countries': 'بلد',
    'impact.satisfaction': 'نسبة الرضا',
    
    // About
    'about.title': 'عن LAMBDA SOFT',
    'about.subtitle': 'شريكك التكنولوجي',
    'about.description': 'LAMBDA SOFT هي شركة متخصصة في تطوير الحلول المعلوماتية ودمج أنظمة المعلومات الموجهة لتدبير وتسيير المقاولات والإدارات. تأسست سنة 1989، وتواكب زبناءها في مسار التحول الرقمي من خلال تقديم خدمات متكاملة تشمل الاستشارة ودراسة الاحتياجات، مرورًا بتطوير الحلول المعلوماتية وتنفيذها، وصولًا إلى الصيانة والمتابعة. وبفضل فريق يتكون من مهندسين ومطورين ومسيرين ذوي كفاءة عالية، تضع LAMBDA SOFT خبرتها رهن إشارة المقاولات الصغرى والمتوسطة، والشركات الكبرى، والمؤسسات العمومية. ويتمثل هدفها الأساسي في تقديم حلول فعالة، مستدامة ومصممة حسب احتياجات كل عميل، مع ضمان الجودة، واحترام الآجال، وتحقيق رضا الزبناء.',
    'about.experience': 'سنوات من الخبرة',
    'about.projects': 'مشروع منجز',
    'about.clients': 'عميل راضٍ',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'لنتحدث عن مشروعك',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'contact.info': 'معلومات الاتصال',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.description': 'حلول برمجية مبتكرة لشركتك',
  },
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language = signal<Language>('fr');

  constructor() {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && (saved === 'fr' || saved === 'ar')) {
      this.language.set(saved);
    }

    // Equivalent de useEffect
    effect(() => {
      const currentLang = this.language();

      localStorage.setItem('language', currentLang);
      document.documentElement.setAttribute('lang', currentLang);
      document.documentElement.setAttribute(
        'dir',
        currentLang === 'ar' ? 'rtl' : 'ltr'
      );
    });
  }

  setLanguage(lang: Language) {
    this.language.set(lang);
  }

  toggleLanguage() {
    this.language.update(prev => (prev === 'fr' ? 'ar' : 'fr'));
  }

  t(key: string): string {
    const translation = translations[this.language()][key as keyof typeof translations.fr];
    return translation !== undefined ? translation : key;
  }
}