import { fetchLogin, fetchRefreshToken } from '~/api'

export const useUserStore = defineStore(
  'user',
  () => {
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

    async function handleLogin(params: Api.UserManage.LoginParams) {
      const { data } = await fetchLogin(params)

      setTokenInfo(data)
      // setUserInfo(data.userInfo)

      return true
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

    return { tokenInfo, userInfo, authorization, setToken, setUserInfo, handleRefreshToken, handleLogin }
  },
  {
    persist: true
  })
