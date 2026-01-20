import MockAdapter from 'axios-mock-adapter'
import api from '../services/api'

const mock = new MockAdapter(api, { delayResponse: 800 })

// 👉 Fake database
const user = {
  id: 1,
  name: 'Filipe Corrêa',
  email: 'admin@admin.com'
}

const TOKEN = 'fake-jwt-token'

// LOGIN
mock.onPost('/login').reply((config) => {
  const { email, password } = JSON.parse(config.data)

  if (email === 'admin@admin.com' && password === '123456') {
    return [
      200,
      {
        token: TOKEN,
        user
      }
    ]
  }

  return [
    401,
    { message: 'Credenciais inválidas' }
  ]
})

// ME
mock.onGet('/me').reply((config) => {
  if (config.headers?.Authorization === `Bearer ${TOKEN}`) {
    return [200, user]
  }

  return [401]
})

// LOGOUT
mock.onPost('/logout').reply(200)

export default mock
