import { verifyToken } from '../../utils/token'

export default defineEventHandler(async (event) => {
  const authHeader = getRequestHeader(event, 'Authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    setResponseStatus(event, 401)

    return {
      code: 1,
      message: 'Missing authorization header',
      data: null
    }
  }

  const token = authHeader.split(' ')[1]
  const verification = verifyToken(token)

  if (!verification.valid) {
    setResponseStatus(event, 401)
    return {
      code: 1,
      message: verification.error,
      data: null
    }
  }

  // 验证成功, 确保它是 access token
  if (verification.payload.type !== 'access') {
    setResponseStatus(event, 401)
    return {
      code: 1,
      message: 'Invalid token type, expected access token',
      data: null
    }
  }

  // 验证通过
  return {
    code: 0,
    message: 'Token 验证成功!',
    data: {
      id: verification.payload.userId,
      username: 'li',
      email: 'li@qq.com',
      fullName: 'lili',
      isActive: true,
      createdAt: '2023-01-01T00:00:00.000Z',
      updatedAt: '2023-01-01T00:00:00.000Z'
    }
  }
})
