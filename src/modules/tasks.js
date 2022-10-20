export default class Task{
    constructor(name, date, details){
        this.name = name,
        this.date = date,
        this.details = details
    }
    setTaskName = name =>{
        this.name = name
    }
    getTaskName = () =>{
        return this.name
    }
    setDate = date =>{
        this.date = date
    }
    getDate = () =>{
        return this.date
    }
    setDetails = details =>{
        this.details = details
    }
    getDetails = () =>{
        return this.details
    }
}