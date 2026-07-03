import { Component } from '@angular/core';
import { TranslatePipe } from '../../Pipe/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
