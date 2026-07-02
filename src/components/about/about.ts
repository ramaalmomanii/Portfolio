import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private translateService: TranslateService) {}

  t(key: string): string {
    return this.translateService.translate(key);
  }
}
