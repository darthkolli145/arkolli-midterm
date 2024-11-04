import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-goals-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weekly-goals-modal.component.html',
  styleUrls: ['./weekly-goals-modal.component.scss']
})
export class WeeklyGoalsModalComponent {
  goals = [
    { text: 'Finish Google cover letter', category: '#apply-internships', placeholder: 'Enter your goal...' },
    { text: 'Apply to Microsoft', category: '#apply-internships', placeholder: 'Enter your goal...' },
    { text: 'Practice implementing data structures', category: '#class-algorithms', placeholder: 'Enter your goal...' },
    { text: '', category: 'quarterly goal...', placeholder: 'Enter your goal...' },
  ];

  categories = ['#apply-internships', '#class-algorithms', '#interview-technical', 'quarterly goal...'];

  saveGoals() {
    console.log('Goals saved:', this.goals);
  }

  closeModal() {
    console.log('Modal closed');
  }

  getCategoryClass(category: string): string {
    switch (category) {
      case '#apply-internships':
        return 'apply-internships';
      case '#class-algorithms':
        return 'class-algorithms';
      case '#interview-technical':
        return 'interview-technical';
      default:
        return 'default-category';
    }
  }
}
