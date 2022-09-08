import { generateId } from '../Utils/generateId.js';

export class Job {
  /**
   * The data needed to make a car
   * @param {{imgUrl: string, company: string, jobtitle: string, hours: number,rate: number ,description: string, id?:string}} data
   */
  constructor(data) {
    this.id = data.id || generateId();
    this.imgUrl = data.imgUrl;
    this.company = data.company;
    this.jobtitle = data.jobtitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
  }

  get JobTemplate() {
    return /*html*/ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="" class="img-fluid">
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
    `;
  }
}
