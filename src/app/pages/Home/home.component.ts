import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/header.component";
import { HeroComponent } from "../Hero/hero.component";
import { ServicesComponent } from "../Services/services.component";
import { PortfolioComponent } from "../Portfolio/portfolio.component";
import { AboutComponent } from "../about/about.component";
import { FAQComponent } from "../FAQ/faq.component";
import { ContactComponent } from "../Contact/contact.component";
import { FooterComponent } from "../Footer/footer.component";
import { PartnersComponent } from "../Partners/partners.component";
import { ImpactComponent } from "../Impact/impact.component";
import { ExpertiseComponent } from "../Expertise/expertise.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    PartnersComponent,
    AboutComponent,
    FAQComponent,
    ImpactComponent ,
    ExpertiseComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-impact></app-impact>
    <app-portfolio></app-portfolio>
    <app-expertise></app-expertise>
    <app-partners></app-partners>
    <app-about></app-about>
    <app-faq></app-faq>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class HomeComponent {}