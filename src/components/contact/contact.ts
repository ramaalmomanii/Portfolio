import { Component } from '@angular/core';
import { TranslatePipe } from '../../Pipe/translate.pipe';


@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {


}
