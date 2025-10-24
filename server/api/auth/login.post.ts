import { createToken } from '../../utils/token'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  // ... 验证逻辑 ...
  if (email !== 'li@qq.com' || password !== 'password123456789') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid username or password'
    })
  }

  // 模拟一个用户ID
  const userId = 'user-12345'
  const now = Date.now()

  // 1. 创建 Access Token (设置一个很短的过期时间, 比如 1 分钟, 方便测试)
  const accessTokenExpires = now + 1 * 60 * 1000 // 1 分钟
  const accessToken = createToken({
    userId,
    type: 'access',
    expires: accessTokenExpires
  })

  // 2. 创建 Refresh Token (设置一个较长的过期时间, 比如 7 天)
  const refreshTokenExpires = now + 7 * 24 * 60 * 60 * 1000 // 7 天
  const refreshToken = createToken({
    userId,
    type: 'refresh',
    expires: refreshTokenExpires
  })

  return {
    message: '登录成功!',
    data: {
      accessToken,
      refreshToken
    },
    code: 0
  }
})
