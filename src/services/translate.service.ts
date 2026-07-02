import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  currentLang = 'en';
  private translations: Record<string, any> = {};

  async use(lang: string) {
    if (!this.translations[lang]) {
      try {
        const res = await fetch(`/i18n/${lang}.json`);
        if (!res.ok) throw new Error('Failed to load');
        this.translations[lang] = await res.json();
      } catch (e) {
        this.translations[lang] = {};
      }
    }
    this.currentLang = lang;
    try { localStorage.setItem('lang', lang); } catch { }

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
  }

  translate(key: string): string {
    const obj = this.translations[this.currentLang] || {};
    const parts = key.split('.');
    let cur: any = obj;
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p];
      } else {
        return key;
      }
    }
    return typeof cur === 'string' ? cur : key;
  }
}
