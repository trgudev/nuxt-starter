export function fetchRefreshToken(refreshToken: string) {
  return useApiRequest<Api.Auth.LoginToken>('/token/refresh', {
    method: 'post',
    body: {
      refreshToken
    }
  })
}
