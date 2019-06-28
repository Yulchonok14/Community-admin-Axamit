export class Employee {
  public id: string;
  public name: string;
  public imageUrl: string;
  public position: string;
  public active: boolean;

  constructor(id: string, name: string, imageUrl: string, position: string, active: boolean = true) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.position = position;
    this.active = active;
  }
}
