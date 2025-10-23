/** The global namespace for the app */
declare namespace App {

  namespace Service {
    /** The backend service response data */
    type Response<T = unknown> = {
    /** The backend service response code */
      code: number
      /** The backend service response message */
      message: string
      /** The backend service response data */
      data: T
    }
  }
}
