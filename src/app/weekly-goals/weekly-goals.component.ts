import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-goals.component.html',
  styleUrls: ['./weekly-goals.component.scss'],
})
export class WeeklyGoalsComponent {
  goals = [
    {
      text: 'Finish Google cover letter...',
      category: '#apply-internships',
      isCompleted: false,
    },
    {
      text: 'Apply to Microsoft',
      category: '#apply-internships',
      isCompleted: false,
    },
    {
      text: 'Practice implementing data structures...',
      category: '#interview-technical',
      isCompleted: false,
    },
  ];

  categories = [
    '#apply-internships',
    '#class-algorithms',
    '#interview-technical',
    'quarterly goal...',
  ];

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

  toggleGoalCompletion(goal: any) {
    goal.isCompleted = !goal.isCompleted;
  }

  addGoal() {
    this.goals.push({
      text: 'New Goal',
      category: 'quarterly goal...',
      isCompleted: false,
    });
  }

  editGoals() {
    console.log('Edit goals clicked');
  }
}
