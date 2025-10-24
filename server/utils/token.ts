import { Buffer } from 'buffer'

// 基础的 Token Payload 结构
interface TokenPayload {
  userId: string
  type: 'access' | 'refresh'
  expires: number // 过期时间戳
}

/**
 * 模拟创建一个 Token (实质上是 Base64 编码的 JSON)
 */
export function createToken(payload: TokenPayload): string {
  const jsonPayload = JSON.stringify(payload)
  // 在 Node.js 环境中, 使用 Buffer 进行 Base64 编码
  return Buffer.from(jsonPayload).toString('base64')
}

/**
 * 模拟验证一个 Token
 * 它会解码, 解析, 并检查过期时间
 */
export function verifyToken(token?: string): { valid: true, payload: TokenPayload } | { valid: false, error: string } {
  if (!token) return { valid: false, error: 'Missing token' }

  let payload: TokenPayload

  try {
    // Base64 解码
    const jsonPayload = Buffer.from(token, 'base64').toString('utf-8')
    payload = JSON.parse(jsonPayload)
  } catch (error) {
    console.log(error)
    return { valid: false, error: 'Invalid token format' }
  }

  // 核心：检查过期时间
  if (Date.now() > payload.expires) {
    return { valid: false, error: 'Token expired' }
  }

  return { valid: true, payload }
}
