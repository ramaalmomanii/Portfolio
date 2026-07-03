import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { TranslatePipe } from '../../Pipe/translate.pipe';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  lang = 'en';
  isDark = false;


  constructor(private translateService: TranslateService) { }

  async ngOnInit() {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'en';
    this.lang = saved;
    await this.translateService.use(this.lang);

    const savedTheme = localStorage.getItem('theme') || 'light';
    this.isDark = savedTheme === 'dark';
    this.applyTheme();
  }

  async toggleLang() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    await this.translateService.use(this.lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', this.lang);
    }
  }


  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('dark-mode', this.isDark);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
