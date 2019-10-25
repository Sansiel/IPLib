import {Deserializable} from '../../shared/utils/models/deserializable.model';

export class Author implements Deserializable {
  public id: number;
  public firstName: string;
  public lastName: string;
  public middleName: string;

  public deserialize(input: any): this {
    return Object.assign(this, input);
  }

  public get fullName(): string {
    return `${this.firstName[0]}. ${this.middleName[0]}. ${this.lastName}`;
  }
}


