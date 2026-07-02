import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private translateService: TranslateService) { }

  t(key: string): string {
    return this.translateService.translate(key);
  }

}
