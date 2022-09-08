export class House{
  constructor(bedrooms,bathrooms,levels,imgUrl,year,price,description){
    this.bedrooms=bedrooms
    this.bathrooms=bathrooms
    this.level=levels
    this.imgUrl=imgUrl
    this.year=year
    this.price=price
    this.description=description
  }


  get HouseTemplate(){
   
      return /*html*/`
      <div class="col-md-4 col-lg-3 mb-3">
        <div class="card">
          <img src="${this.imgUrl}" alt="" class="img-fluid">
          <div class="card-body">
            <h5 class="text-uppercase">
              ${this.bedrooms} | ${this.bathrooms} |${this.level}
            </h5>
            <p>
              <strong> ${this.year}|$${this.price}</strong>
            </p>
            <p>${this.description}</p>
          </div>
        </div>
      </div>
      `
    }
    

    get HouseFormTemplate(){
      return `
       <form onsubmit="app.carsController.addCar()">

      <div class="form-floating mb-3">
        <input type="number" class="form-control" name="bedrooms" required minlength="3" maxlength="20">
        <label for="make">Bedrooms</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" class="form-control" name="bathrooms" >
        <label for="model">Model</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" class="form-control" name="levels" required min="1886" max="9999">
        <label for="year">Year</label>
      </div>

      <div class="form-floating mb-3">
        <input type="url" class="form-control" name="imgUrl" required >
        <label for="price">Picture!</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" class="form-control" name="year" required min="1886" max="9999">
        <label for="year">Year</label>
      </div>

    <div class="form-floating mb-3">
        <input type="number" class="form-control" name="price" required min="0" >
        <label for="year">Price</label>
      </div>


      <div class="d-flex my-4 gap-5 align-items-center">
        <button class="btn" type="reset">Cancel</button>
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>

      <div class="form-floating">
        <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
        <label for="description">Description</label>
      </div>

    </form>
      `
    }
   
}