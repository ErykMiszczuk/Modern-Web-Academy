export class Todo {
  name: String;
  done: boolean;
  
  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.done = obj && obj.done || false;
  }

  setName(name: String) {
    this.name = name;
  }
  getName(): String {
    return this.name;
  }
  getDone(): boolean {
    return this.done;
  }

}