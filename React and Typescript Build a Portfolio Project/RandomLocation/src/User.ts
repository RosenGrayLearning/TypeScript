import faker from 'faker';
import {location} from './types';
import {getLatAndLng} from './helpers';

class User {
    name:string;
    location:location;
    
    constructor(){
        this.name = faker.name.firstName();
        this.location = getLatAndLng();
    }

    markerContent() {
        return `User Name: ${this.name}`;
    }
}



export default User;