import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-controls.html',
  styleUrl: './data-controls.scss'
})
export class DataControlsComponent {

  exportChats() {

    console.log('Export Chats');

  }

  importChats() {

    console.log('Import Chats');

  }

  clearChats() {

    console.log('Delete All Chats');

  }

}
