import { BASE_URL } from './const'

export default async function getPersons (value) {
  return await fetch(`${BASE_URL.dev}/api/persons/${value}`)
    .then(response => response.json())
    .then(data => data)
}
