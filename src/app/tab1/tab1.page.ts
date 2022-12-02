
import { Component, OnInit } from '@angular/core';
import { AllMealsForTheWeek, Menu } from '../services/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  mealsPerDay : AllMealsForTheWeek[];

  constructor( private menuService : MenuService ) {}

  ngOnInit(): void {
    this.getAllMenus();
    
  }

  getAllMenus(){
    this.menuService.getMenuOfTheWeek()
      .subscribe(menuForAday => {
        menuForAday.forEach((menu, index) => {
          menu.day = this.findTheDay(index);
        });
        console.log(menuForAday);
        
        const mealsPerDay = this.groupByDay(menuForAday);
        this.mealsPerDay=[...mealsPerDay];
        console.table(this.mealsPerDay);
        
      });

  }

  /**
   * pour chaques repas de chaques jour  de la semaine on attribue un menu et un jour
   */
  groupByDay(items: Menu[]): AllMealsForTheWeek[] {
    console.log("items",items.filter((item: Menu) => item.day === 'lundi'));
    
    const lundiMeal: Menu[] = items.filter((item: Menu) => item.day === 'lundi')
    const mardiMeal: Menu[] = items.filter((item: Menu) => item.day === 'mardi')
    const mercrediMeal: Menu[] = items.filter((item: Menu) => item.day === 'mercredi')
    const jeudiMeal: Menu[] = items.filter((item: Menu) => item.day === 'jeudi')
    const vendrediMeal: Menu[] = items.filter((item: Menu) => item.day === 'vendredi')
    console.log("lundi",lundiMeal);
    
    const mealsPerDay: AllMealsForTheWeek[] = [
      {
        id: 1, 
        name: 'lundi',
        meals: lundiMeal
      },
      {
        id: 1, 
        name: 'mardi',
        meals: mardiMeal
      },
      {
        id: 1, 
        name: 'mercredi',
        meals: mercrediMeal
      },
      {
        id: 1, 
        name: 'jeudi',
        meals: jeudiMeal
      },
      {
        id: 1, 
        name: 'vendredi',
        meals: vendrediMeal
      }
    ]
    console.log(mealsPerDay);
    
    return mealsPerDay
  } 

  findTheDay(index : number ) : string{
    return ["lundi", "mardi", "mercredi" , "jeudi" , "vendredi"][Math.floor(index/2)]
  }


}
