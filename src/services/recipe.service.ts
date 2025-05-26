import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Recipes } from "../entites/Recipes";

@Injectable({
    providedIn: "root"
})
export class RecipeService {
    private apiUrl: string = environment.apiUrl;
    constructor(private http: HttpClient) { }

    // recipe.service.ts
    getRecipes(): Observable<Recipes[]> {
        return this.http.get<Recipes[]>(this.apiUrl+'Recipe');
    }

}