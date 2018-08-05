import { http } from '../../../utils/http';
import { endpoints } from '../../../config/api';

export function getCountriesPopulation(year, age = 18) {
  return http.get(`${endpoints.population}/${year}/aged/${age}/`);
}
