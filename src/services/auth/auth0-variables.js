const domain = 'licensr.auth0.com'
export const AUTH_CONFIG = {
  domain,
  clientId: 'H1NWCPUq060rZ13uZf7LG8RjzFY3Y4xD',
  callbackUrl: 'http://localhost:3009/callback',
  audience: `https://${domain}/api/v2/`,
  scope: 'openid email profile'
}
