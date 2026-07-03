import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { TranslatePipe } from '../../Pipe/translate.pipe';
@Component({
  selector: 'app-footer',
  imports: [ TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear: number = new Date().getFullYear();

  async ngOnInit() {}

}
