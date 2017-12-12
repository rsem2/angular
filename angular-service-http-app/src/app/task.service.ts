import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class TaskService {
  task: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  retrieveTask(){
    this._http.get('https://5a2ef73c0e07b70012083acf.mockapi.io/task').subscribe( 
      (task: any[]) => { this.updateTask(task); }
    );
  }

  addTask(newTask: any){
    this._http.post('https://5a2ef73c0e07b70012083acf.mockapi.io/task', newTask).subscribe(
      (response) => { this.retrieveTask(); }
    )
  }

  updateTask(newTask: any): void {
    const tempTask = this.task.getValue();
    tempTask.push(newTask)
    this.task.next(tempTask);
  }
}
