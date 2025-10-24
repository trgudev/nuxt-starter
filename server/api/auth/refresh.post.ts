import { createToken, verifyToken } from '../../utils/token'

export default defineEventHandler(async (event) => {
  // 从请求体中获取 refreshToken
  const { refreshToken } = await readBody(event)

  if (!refreshToken) {
    throw createError({
      statusCode: 400,
      message: 'Missing refresh token'
    })
  }

  const verification = verifyToken(refreshToken)

  // 1. 验证 Refresh Token 是否有效
  if (!verification.valid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: `Refresh token invalid: ${verification.error}`
    })
  }

  // 2. 验证类型是否为 'refresh'
  if (verification.payload.type !== 'refresh') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid token type, expected refresh token'
    })
  }

  // 3. 签发新的 Access Token
  const now = Date.now()
  const accessTokenExpires = now + 1 * 60 * 1000 // 1 分钟
  const newAccessToken = createToken({
    userId: verification.payload.userId,
    type: 'access',
    expires: accessTokenExpires
  })

  return {
    message: 'Token 刷新成功!',
    accessToken: newAccessToken
  }
})
