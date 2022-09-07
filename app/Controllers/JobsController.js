import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { setHTML } from "../Utils/Writer.js"

function drawJobs() {
  let template = ''
  
  setHTML('listings',)
}


export class JobsController {
  constructor() {
    console.log('the jobs controller')

  }

  showJobs() {
    drawJobs()
  }
}



/**
 *   setHTML('listings', `
  <div>
  <h1>YOUR JOB STARTS HERE</h1>
</div>
`)
 */