import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'canFly'
})
export class canFlyPipe implements PipeTransform{

    transform(value: boolean): 'vuela' | 'no vuela' {

        return (value) ? 'vuela' : 'no vuela';
        
    }

}