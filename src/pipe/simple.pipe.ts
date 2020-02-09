import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'firstpipe'
})

export class SimplePipe implements PipeTransform{
    transform(value:number, nu:number){

        nu= nu>0 ? nu:10
        return (value+(nu*2));
        
    }
}