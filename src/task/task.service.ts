import { Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';
import { NotFoundError } from 'rxjs';
import { isContext } from 'vm';

@Injectable()
export class TaskService {
    private tasks =  [
      {
        id: 1,
        title: 'Learn Nest',
        isCompleted: false
      },
      {
        id: 2,
        title: 'Byild API',
        isCompleted: true
      }
    ]


    findAll(){
        return this.tasks
    }

    findById(id: number){
        const task = this.tasks.find((task)=> task.id === id)
        if(!task){
            throw new NotFoundException(`Task not found`)
        }
    return task
    }

    create(){
        const newTask = {
            id: this.tasks.length + 1,
            title: `New task`,
            isCompleted: false
        }
        this.tasks.push(newTask)

        return true
    }
}
