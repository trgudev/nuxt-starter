import { fetchLogin, fetchRefreshToken, fetchUserInfo } from '~/api'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const toast = useToast()

  const initTokenInfo = {
    accessToken: '',
    refreshToken: ''
  }

  const initUserInfo = {
    id: 0,
    username: '',
    email: '',
    fullName: '',
    isActive: false,
    createdAt: '',
    updatedAt: ''
  }

  const tokenInfo = ref<Api.Auth.LoginToken>({ ...initTokenInfo })
  const userInfo = ref<Api.Auth.UserInfo>({ ...initUserInfo })

  const authorization = computed(() => tokenInfo.value.accessToken ? `Bearer ${tokenInfo.value.accessToken}` : null)

  let refreshPromise: Promise<boolean> | null = null

  function setToken(data: string) {
    tokenInfo.value.accessToken = data
  }

  function setTokenInfo(data: Api.Auth.LoginToken) {
    tokenInfo.value = data
  }

  function setUserInfo(data: Api.Auth.UserInfo) {
    userInfo.value = data
  }

  function logout(redirect = true) {
    setUserInfo({ ...initUserInfo })
    setTokenInfo({ ...initTokenInfo })
    refreshPromise = null

    if (redirect) {
      router.replace('/login')
      toast.add({ title: 'Logged out', description: 'You have been logged out.' })
    }
  }

  async function getUserInfo() {
    try {
      const { data } = await fetchUserInfo()
      setUserInfo(data)
    } catch (error) {
      console.error('Get User Info Failed', error)
    }
  }

  async function handleLogin(params: Api.UserManage.LoginParams) {
    try {
      const { data } = await fetchLogin(params)
      setTokenInfo(data)
      await getUserInfo()
      toast.add({ title: 'Login Success', description: `Welcome back, ${userInfo.value.fullName}!` })
      router.replace('/dashboard/home')
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async function handleRefreshToken(): Promise<boolean> {
    if (refreshPromise) {
      return refreshPromise
    }

    refreshPromise = (async () => {
      try {
        if (!tokenInfo.value.refreshToken) return false

        const { data } = await fetchRefreshToken(tokenInfo.value.refreshToken)
        setToken(data.accessToken)
        return true
      } catch (error) {
        console.error('Failed to refresh access token', error)
        logout(false)
        return false
      } finally {
        refreshPromise = null
      }
    })()

    return refreshPromise
  }

  return {
    tokenInfo,
    userInfo,
    authorization,
    setToken,
    setUserInfo,
    handleRefreshToken,
    handleLogin,
    getUserInfo,
    logout
  }
},
{
  persist: {
    storage: piniaPluginPersistedstate.localStorage()
  }
})
