import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  recipe: RecipeModel[] = [
    {name: 'Ponzu Tofu Bowl',
    description:'Whip up a speedy vegan dinner with our best-rated plant-based recipes.',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg'},
    {name: 'Tomato & black bean taco salad',
    description:'Enjoy this refreshing taco salad on a warm evening when you’re craving something quick, <br> fresh and crunchy, or as a side for a Mexican-style feast',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Tomato-and-black-bean-taco-salad--5a5ae71.jpg?quality=90&webp=true&resize=375,341'},
    {name: 'Quick & easy chickpea coconut dhal',
    description:'Try this quick and easy version of dhal.<br> It is packed with good-for-you ingredients including chickpeas, lentils and spinach',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Dahl-d267922.jpg?quality=90&webp=true&crop=3px,23px,895px,813px&resize=375,341'},
    {name: 'Vegan tiffin',
    description:'Make our vegan tiffin squares as a festive treat, packed with Christmas ingredients <br> like ginger nuts, dried cranberries and pistachios. They are great for a party.',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/vegan-tiffin-6649aca.jpg?quality=90&webp=true&resize=440,400'},
    {name: 'Gnocchi with herb sauce',
    description:'Rustle up this gnocchi with anchovies and herb sauce in just 10 minutes. If you don’t <br>like anchovies, or want to make this dish vegan,  simply omit them from the sauce',
    imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-with-herb-sauce-7863963.jpg?quality=90&webp=true&resize=440,400'},
    
  ];
}
