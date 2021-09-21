import faker from 'faker';
import {location} from './types';

export const getLatAndLng = () : location => ({
    lat:parseFloat(faker.address.latitude()),
    lng:parseFloat(faker.address.longitude())
})

