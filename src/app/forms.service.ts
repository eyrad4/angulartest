import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class FormsService{
    constructor(private http: Http){}

    getForms(){
        return this.http.get('http://localhost:3000/forms');
    }

    editForm(formid: any){
        return this.http.get(`http://localhost:3000/forms/${formid}`);   
    }

    previewForm(formid: any){
        return this.http.get(`http://localhost:3000/forms/${formid}`)
        .map((response: Response) => {
            return response.json();
        });           
    }

    saveForm(form){
        const data = form;        
        return this.http.post('http://localhost:3000/forms', data);
    }

    editSaveForm(form, formid){
        const data = form;        
        return this.http.put(`http://localhost:3000/forms/${formid}`, form);
    }

    deleteForms(form: any){
        
        return this.http.delete(`http://localhost:3000/forms/${form.id}`, form);
    }
}