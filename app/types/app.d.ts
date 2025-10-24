/** The global namespace for the app */
declare namespace App {

  namespace Service {
    /** The backend service response data */
    type Response<T = unknown> = {
      code: number
      message: string
      data: T
    }
  }

  namespace Button {
    /** The u-button component config */
    type Button = ComponentConfig<typeof theme, AppConfig, 'button'>

    type Color = Button['variants']['color']

    type Color = Button['variants']['variant']

  }
}
