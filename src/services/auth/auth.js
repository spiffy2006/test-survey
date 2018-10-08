import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'

export default class Auth {
  constructor () {
    this.auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: AUTH_CONFIG.audience,
      responseType: 'token id_token',
      scope: AUTH_CONFIG.scope
    })
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  // setRouter (router) {
  //   this.router = router
  // }

  login () {
    this.auth0.authorize()
  }

  // apiAuth({accessToken, idToken}) {
  //   return fetch('http://localhost:4466/gql/dev', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJncWxAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTUyNTg3MzM3MiwiZXhwIjoxNTI2NDc4MTcyfQ.tpu0BbqV0J2md9u_-jgo4B_j8AzQhkLf6IGTOAsgul8'
  //     },
  //     body: JSON.stringify({
  //       query: operation.text,
  //       variables
  //     })
  //   }).then(response => {
  //     return response.json()
  //   })
  // }
// curl 'http://localhost:4000' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"\n\nmutation ($id_token: String!) {\n  signUp(idToken: $id_token) {\n    id\n    email\n    emailVerified\n  }\n}","variables":{"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1rUkJOVVV6TTBZeU1rWXhPRUUzTXpRM09FSkNNRFpGUWpKRE1FUXhOell6TXpSR1JqTTVRUSJ9.eyJuaWNrbmFtZSI6InBpbmVhcHBsZW1jbmFiKzEiLCJuYW1lIjoicGluZWFwcGxlbWNuYWIrMUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvM2ViMjE0NDU0NzdkNTVlYmMzZGMzNTU1N2MwZDNiMDk_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZwaS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAxOC0wNS0xNFQxNDoyNDowOS4xNTNaIiwiZW1haWwiOiJwaW5lYXBwbGVtY25hYisxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2xpY2Vuc3IuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVhZjJmZThjNWQ3ZDE2MTdmZDdiYWFkZSIsImF1ZCI6IkgxTldDUFVxMDYwcloxM3VaZjdMRzhSanpGWTNZNHhEIiwiaWF0IjoxNTI2MzA3ODU0LCJleHAiOjE1MjYzNDM4NTQsImF0X2hhc2giOiJKcTk2T192OWhrNGJ2c1pLdjMyeFJnIiwibm9uY2UiOiI4YnZyeURETjhuZ295U1RsUk54dFIzbmxncjZ6UkRPTiJ9.uToGAxB3zgg5Z9K0YvxR5EPb1OGPqGgC1y3FkK1Xpi4ipiJ8wnDfeabOmnxnwg6sIX5YBfrzK6gZVXtjed9RD7ahKLHVRh448Fqt6qfgkvMbiF3mj4m8tRE7XHYStgRs3JYm1EtWouI6xywua2gZbchFQuur_mPCshfI0AyYbvXB9f1n7xFflPfJ6vhnATxAmm2S6zEaeNjoRE2vywOCX--IFUDqZsZ6I_xAddcHdEFSL9LCRRzx1T4bhXJpcoo_telDFt0SXlcS_9Z_wlu5AM60wEl3zbeZlCLioZul4-4xRDwp3jeXLNuW0EFWl1MNcf5W2uXOlIrvIre48WUWUA"}}' --compressed
  authWithServer (idToken) {
    const query = `
    mutation ($id_token: String!) {
      signUp(idToken: $id_token) {
        email
        emailVerified
      }
    }`
    return fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJwZ0BkZXYiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTI0NDkxMzMzLCJleHAiOjE1MjUwOTYxMzN9.b8zJM_LLXpdZJyKe-RrQrxstkMwrbsPsQmy-mK2e03k'
      },
      body: JSON.stringify({
        query,
        variables: {
          id_token: idToken
        }
      })
    }).then(response => {
      return response.json()
    })
  }

  handleAuthentication (cb) {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        console.log('parseHash', err, authResult)
        if (authResult && authResult.accessToken && authResult.idToken) {
          console.log('auth success', authResult)
          this.authWithServer(authResult.idToken)
          .then(response => {
            this.setSession(authResult)
            window.location.hash = ''
          })
          .catch(err => {
            console.log(err)
            return reject(err)
          })
          resolve()
        } else if (err) {
          console.log(err)
          return reject(new Error(err.error))
        }
      })
    })
  }

  setSession (authResult) {
    this.auth0.client.userInfo(authResult.accessToken, console.log)
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    // navigate to the home route
    // this.router.replace('/uniforms')
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to the home route
    // this.router.replace('/')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
