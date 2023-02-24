import { BASE_URL } from './const'

export default async function editPerson (data, nit) {
  return await fetch(`${BASE_URL.dev}/api/persons/${nit}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(dataResponse => dataResponse)
}
