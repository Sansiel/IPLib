import {Deserializable} from '../../shared/utils/models/deserializable.model';

export class Author implements Deserializable {
  public id: number;
  public first_name: string;
  public last_name: string;
  public middle_name: string;

  public deserialize(input: any): this {
    return Object.assign(this, input);
  }

  public get fullName(): string {
    return `${this.first_name[0]}. ${this.middle_name[0]}. ${this.last_name}`;
  }
}


