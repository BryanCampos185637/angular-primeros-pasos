import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public herosName: string[] = ['spiderman', 'thor', 'ironman'];
  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.herosName.pop();
  }
}
