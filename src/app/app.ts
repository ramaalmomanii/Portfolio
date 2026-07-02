import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import { Home } from '../components/home/home';
import { Navbar } from '../components/navbar/navbar';
import { Projects } from '../components/projects/projects';
import { TranslateService } from '../services/translate.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
  constructor(private translate: TranslateService) {
    this.translate.use('en'); 
  }
}
