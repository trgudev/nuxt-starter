// 登陆
export function fetchLogin(loginToken: Api.UserManage.LoginParams) {
  return useApiRequest<Api.Auth.LoginToken>('/api/auth/login', {
    method: 'post',
    body: loginToken
  })
}

// 获取用户信息
export function fetchUserInfo() {
  return useApiRequest<Api.Auth.UserInfo>('/api/auth/user', {
    method: 'get'
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
