import { appState } from '../AppState.js';
import { Job } from '../Models/Job.js';
import { getFormData } from '../Utils/FormHandler.js';
import { setHTML } from '../Utils/Writer.js';
import { jobsService } from '../Services/JobsService.js';

function drawJobs() {
  let template = '';
  appState.jobs.forEach((job) => (template += job.JobTemplate));

  setHTML('listings', template);
  // NOTE when job lisdting is drawn it makes sense to just have the form take over the same canvas template and have a single button that's doing all the same thing and just switch the inner text
  drayJobsForm()
}



function drayJobsForm(){
  let template = ''
  template += /*html */`
  
  <form onsubmit="app.jobsController.addJob()">

  <div class="form-floating mb-3">
    <input type="url" class="form-control" name="imgUrl">
    <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
  </div>


  <div class="form-floating mb-3">
    <input type="text" class="form-control" name="company" required>
    <label for="company">Company</label>
  </div>

  <div class="form-floating mb-3">
    <input type="text" class="form-control" name="jobtitle" required>
    <label for="jobtitle">Job title</label>
  </div>

  <div class="form-floating mb-3">
    <input type="number" class="form-control" name="hours" required>
    <label for="hours">Hours</label>
  </div>

  <div class="form-floating mb-3">
    <input type="number" class="form-control" name="rate" required >
    <label for="rate">Rate</label>
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
  setHTML('listingform',template)
}
export class JobsController {
  constructor() {
 appState.on('jobs', drawJobs)
  }

  showJobs() {
    drawJobs();
  }

showForm(){
  drayJobsForm()
}

  addJob() {
    try {
    
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);
      jobsService.addJob(formData)
      drawJobs()
   
    } catch (error) {
      console.error('addJob', error);
    }
  }
}

/**
 *   setHTML('listings', `
  <div>
  <h1>YOUR JOB STARTS HERE</h1>
</div>
`)
 */
