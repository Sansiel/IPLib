import {Author} from './author.model';
import {Deserializable} from '../../shared/utils/models/deserializable.model';

export class Book implements Deserializable {
  public id: number;
  public author: Author;
  public name: string;

  public deserialize(input: any): this {
    Object.assign(this, input);

    this.author = new Author().deserialize(input.author);

    return this;
  }
}
