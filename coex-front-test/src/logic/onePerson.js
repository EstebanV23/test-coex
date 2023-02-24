import { BASE_URL } from './const'

export default async function onePerson (nit) {
  return await fetch(`${BASE_URL.dev}/api/persons/unique/${nit}`)
    .then(response => response.json())
    .then(data => data)
}
