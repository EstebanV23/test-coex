import { BASE_URL } from './const'

export default async function createCredit (data) {
  return await fetch(`${BASE_URL.dev}/api/credits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(dataResponse => dataResponse)
}
