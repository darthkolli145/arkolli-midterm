import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-goals-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weekly-goals-modal.component.html',
  styleUrls: ['./weekly-goals-modal.component.scss'],
})
export class WeeklyGoalsModalComponent {
  @Input() set goals(value: any[]) {
    this._goals = value ? JSON.parse(JSON.stringify(value)) : [];
    this.ensureEmptyGoalAtEnd();
  }
  get goals(): any[] {
    return this._goals;
  }
  private _goals: any[] = [];

  @Output() close = new EventEmitter<any[]>();

  categories = [
    '#apply-internships',
    '#class-algorithms',
    '#interview-technical',
    'quarterly goal...',
  ];

  private ensureEmptyGoalAtEnd() {
    const lastGoal = this._goals[this._goals.length - 1];
    if (!lastGoal || lastGoal.text.trim() !== '') {
      this._goals.push({
        text: '',
        category: 'quarterly goal...',
        placeholder: 'Enter your goal...',
      });
    }
  }

  saveGoals() {
    const nonEmptyGoals = this.goals.filter(goal => goal.text.trim() !== '');
    this.close.emit(nonEmptyGoals);
  }

  closeModal() {
    this.close.emit();
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

  onEnterKey(event: Event, index: number) {
    event.preventDefault();
    const currentGoal = this.goals[index];
    if (currentGoal.text.trim() !== '') {
      if (index === this.goals.length - 1) {
        this.goals.push({
          text: '',
          category: 'quarterly goal...',
          placeholder: 'Enter your goal...',
        });
      }
    }
  }
}
