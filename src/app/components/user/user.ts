import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import IUser from '../../model/user.model';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  user = input<IUser>();
}