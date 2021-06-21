import faker, { fake } from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    (this.name = faker.name.firstName()),
      (this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      });
  }

  markerContent(): string {
    return `<h1>USER NAME: ${this.name}</h1>`;
  }
}
