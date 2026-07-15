import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-model.html',
  styleUrl: './ai-model.scss'
})
export class AiModelComponent {

  selectedModel = 'llama3';

  temperature = 0.7;

}
