// 登陆
export function fetchLogin(loginToken: Api.UserManage.LoginParams) {
  return useApiRequest<Api.Auth.LoginToken>('/api/auth/login', {
    method: 'post',
    body: loginToken
  })
}

// 刷新 Access Token
export function fetchRefreshToken(refreshToken: string) {
  return useApiRequest<Api.Auth.LoginToken>('/api/auth/refresh', {
    method: 'post',
    body: {
      refreshToken
    }
  })
}
