import { verifyToken } from '../../utils/token'

export default defineEventHandler(async (event) => {
  // 客户端应该在请求头中携带 Access Token
  // Authorization: Bearer <your_access_token>
  const authHeader = getRequestHeader(event, 'Authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Missing authorization header'
    })
  }

  const token = authHeader.split(' ')[1]
  const verification = verifyToken(token)

  // 验证失败
  if (!verification.valid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: verification.error // "Token expired" 或 "Invalid token format"
    })
  }

  // 验证成功, 确保它是 access token
  if (verification.payload.type !== 'access') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid token type, expected access token'
    })
  }

  // 验证通过
  return {
    message: 'Token 验证成功!',
    user: {
      id: verification.payload.userId
    }
  }
})
