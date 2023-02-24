import { BASE_URL } from './const'

export default async function createPerson (data) {
  return await fetch(`${BASE_URL.dev}/api/persons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(dataResponse => dataResponse)
}
