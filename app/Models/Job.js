import { generateId } from '../Utils/generateId.js'


export class Job{
  /**
   * The data needed to make a car
   * @param {{make: string, model: string, year: number, price: number, description: string, imgUrl: string, id?:string}} data 
   */
  constructor(imgUrl,company,jobtitle,hours,rate,description) {
 this.imgUrl=imgUrl
    this.company=company
 this.jobtitle=jobtitle
 this.hours=hours
 this.rate=rate
 this.description=description
 
  }



  get JobTemplate() {
    return /*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="${this.company}${this.jobtitle}" class="img-fluid">
        <div class="card-body">
          <h6 class="text-uppercase">
            ${this.company}
          </h6>
          <h6 class="text-uppercase">
            ${this.jobtitle}
          </h6>
          <p>
            <strong>$ ${this.hours}|${this.rate}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}