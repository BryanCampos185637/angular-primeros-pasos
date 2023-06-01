import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${(this, this.name)} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'batman';
  }

  changeAge(): void {
    this.age = 34;
  }

  resetForm(): void {
    this.name = 'iron man';
    this.age = 45;
  }
}
