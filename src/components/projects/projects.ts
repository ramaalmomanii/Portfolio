import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  constructor(private translateService: TranslateService) { }

  t(key: string): string {
    return this.translateService.translate(key);
  }

}
