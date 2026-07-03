import { Component } from '@angular/core';
import { TranslatePipe } from '../../Pipe/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
 
}
