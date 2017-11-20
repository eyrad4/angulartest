import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appRFE'
})
export class renderFormElementPipe implements PipeTransform{
    transform(value: any){
        var render = '';
        switch (value) {
            case 'input':
                render = '<input type="text" name="" placeholder="" />';
                break;
        
            default:
            render = value;
                break;
        }

        return render;
    }    
}