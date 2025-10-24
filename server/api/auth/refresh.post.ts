import { createToken, verifyToken } from '../../utils/token'

export default defineEventHandler(async (event) => {
  // 从请求体中获取 refreshToken
  const { refreshToken } = await readBody(event)

  if (!refreshToken) {
    setResponseStatus(event, 401)

    return {
      code: 1,
      message: 'Missing refresh token',
      data: null
    }
  }

  const verification = verifyToken(refreshToken)

  // 1. 验证 Refresh Token 是否有效
  if (!verification.valid) {
    setResponseStatus(event, 401)

    return {
      code: 1,
      message: 'Refresh token invalid',
      data: null
    }
  }

  // 2. 验证类型是否为 'refresh'
  if (verification.payload.type !== 'refresh') {
    setResponseStatus(event, 401)

    return {
      code: 1,
      message: 'Invalid token type, expected refresh token',
      data: null
    }
  }

  // 2. 签发新的 Access Token
  const now = Date.now()
  const accessTokenExpires = now + 1 * 60 * 1000 // 1 分钟
  const newAccessToken = createToken({
    userId: verification.payload.userId,
    type: 'access',
    expires: accessTokenExpires
  })

  return {
    code: 0,
    message: 'Token 刷新成功!',
    data: {
      accessToken: newAccessToken
    }
  }
})
