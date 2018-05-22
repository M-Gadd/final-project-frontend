import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<any> , searchWor:string): Array<any> {
    if (!value){
      return [];
    }

    if (!searchWor) {
      return value;
    }
    searchWor = searchWor.toLocaleLowerCase();
    return value.filter(oneF => {
      const lowerFoodName = oneF.name.toLocaleLowerCase();
        return lowerFoodName.includes(searchWor)
    });
  }

}
