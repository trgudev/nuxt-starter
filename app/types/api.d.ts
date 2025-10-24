/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  namespace Common {

    /** common params of paginating */
    interface PaginatingCommonParams {
      /** current page number */
      page: number
      /** page size */
      page_size: number
      /** total count */
      total: number
    }

    /** common params of paginating query list data */
    interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
      items: T[]
      pageSize: number
    }

    /** common search params of table */
    type CommonSearchParams = {
      page: number
      page_size: number
    }

    /** common record */
    type CommonRecord<T = any> = {
      /** record id */
      id: number
      /** record creator */
      createdAt: string
      /** record create time */
      updatedAt: string
    } & T

  }

  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      accessToken: string
      refreshToken: string
    }

    interface UserInfo {
      id: number
      username: string
      email: string
      fullName: string
      isActive: boolean
      createdAt: string
      updatedAt: string
    }
  }

}
