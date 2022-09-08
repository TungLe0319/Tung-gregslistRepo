import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

export class HousesService{
  addHouse(formData){
    let house = new House(formData)
 appState.houses = [house]
    console.log('hi from houseservice', house);
  }
}
export const housesService = new HousesService()