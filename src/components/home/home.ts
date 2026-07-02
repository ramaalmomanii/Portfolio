import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private translateService: TranslateService) { }

  t(key: string): string {
    return this.translateService.translate(key);
  }
}
