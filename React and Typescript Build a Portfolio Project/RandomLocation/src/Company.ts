import faker from "faker";
import { location } from "./types";
import { getLatAndLng } from "./helpers";

class Company {
  name: String;
  catchPhrase: string;
  location: location;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = getLatAndLng();
  }
  markerContent() {
    return `
          <div>
              <h1>User Name: ${this.name}</h1>
               <h3>Catchphrase: ${this.catchPhrase} </h3>
          </div>
        `;
  }
}

export default Company;
