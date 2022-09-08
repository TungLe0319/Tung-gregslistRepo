import { appState } from '../AppState.js';
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from '../Utils/Writer.js';

function drawHouses() {
  let template = '';
  appState.houses.forEach((house) => (template += house.HouseTemplate));
  setHTML('listings', template);
  drawHouseForm()
}

function drawHouseForm(){
  let template = ''

 template += /*html*/`
 <form onsubmit="app.housesController.addHouse()">
  
 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bedrooms" required minlength="3">
   <label for="bedrooms">Bedrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bathrooms" >
   <label for="bathrooms">Bathrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="levels" required min="1">
   <label for="levels">Levels</label>
 </div>

 <div class="form-floating mb-3">
   <input type="url" class="form-control" name="imgUrl"  >
   <label for="imgUrl">Picture!</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="year" required  max="9999">
   <label for="year">Year</label>
 </div>

<div class="form-floating mb-3">
   <input type="number" class="form-control" name="price" required min="0" >
   <label for="price">Price</label>
 </div>

 <div class="form-floating">
   <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
   <label for="description">Description</label>
 </div>

 <div class="d-flex my-4 gap-5 align-items-center">
   <button class="btn" type="reset">Cancel</button>
   <button class="btn btn-primary" type="submit">Submit</button>
 </div>


</form>
 `

 
  setHTML('listingform', template)
  document.getElementById('formButton').innerText= '🏡  Add House'
}

export class HousesController {
  constructor() {
    appState.on('houses', drawHouses);
  }

  showHouses() {
    drawHouses();
   
  }
  showForm(){
    drawHouseForm()
  }

  addHouse(){
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
 housesService.addHouse(formData)

form.reset()
    } catch (error) {
      console.error('addHouse',error)
    }
  }


get formTemplate(){
  return /*html*/`
 <form onsubmit="app.housesController.addHouse()">
  
 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bedrooms" required minlength="3">
   <label for="bedrooms">Bedrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bathrooms" >
   <label for="bathrooms">Bathrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="levels" required min="1">
   <label for="levels">Levels</label>
 </div>

 <div class="form-floating mb-3">
   <input type="url" class="form-control" name="imgUrl"  >
   <label for="imgUrl">Picture!</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="year" required  max="9999">
   <label for="year">Year</label>
 </div>

<div class="form-floating mb-3">
   <input type="number" class="form-control" name="price" required min="0" >
   <label for="price">Price</label>
 </div>

 <div class="form-floating">
   <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
   <label for="description">Description</label>
 </div>

 <div class="d-flex my-4 gap-5 align-items-center">
   <button class="btn" type="reset">Cancel</button>
   <button class="btn btn-primary" type="submit">Submit</button>
 </div>


</form>
 `
}

}
