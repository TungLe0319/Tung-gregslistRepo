import { appState } from '../AppState.js';
import { Job } from '../Models/Job.js';
import { getFormData } from '../Utils/FormHandler.js';
import { setHTML } from '../Utils/Writer.js';
import { jobsService } from '../Services/JobsService.js';
function drawJobs() {
  let template = '';
  appState.jobs.forEach((job) => (template += job.JobTemplate));

  setHTML('listings', template);
}

export class JobsController {
  constructor() {
    console.log('the jobs controller');
  }

  showJobs() {
    drawJobs();
  }

  addJob() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);
      jobsService.addJob(formData);
    } catch (error) {}
  }
}

/**
 *   setHTML('listings', `
  <div>
  <h1>YOUR JOB STARTS HERE</h1>
</div>
`)
 */
