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

  function setToken(data: string) {
    tokenInfo.value.accessToken = data
  }

  function setTokenInfo(data: Api.Auth.LoginToken) {
    tokenInfo.value = data
  }

  function setUserInfo(data: Api.Auth.UserInfo) {
    userInfo.value = data
  }

  async function getUserInfo() {
    const { data } = await fetchUserInfo()
    setUserInfo(data)
  }

  async function handleLogin(params: Api.UserManage.LoginParams) {
    const { data } = await fetchLogin(params)

    setTokenInfo(data)

    await getUserInfo()

    toast.add({ title: 'Login Success', description: `Welcome back, ${userInfo.value.fullName}!` })

    router.replace('/dashboard/home')
  }

  async function handleRefreshToken() {
    try {
      const { data } = await fetchRefreshToken(tokenInfo.value.refreshToken)
      setToken(data.accessToken)

      return true
    } catch (error) {
      console.error('Failed to refresh access token', error)

      setUserInfo(initUserInfo)
      setTokenInfo(initTokenInfo)

      return false
    }
  }

  return { tokenInfo, userInfo, authorization, setToken, setUserInfo, handleRefreshToken, handleLogin, getUserInfo }
},
{
  persist: {
    storage: piniaPluginPersistedstate.localStorage()
  }
})
