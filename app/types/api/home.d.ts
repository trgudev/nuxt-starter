declare namespace Api {
  declare namespace HomeManage {
    type HomePageData = {
      features: Features
      sections: Section[]
    }

    type Features = {
      title: string
      description: string
      items: Item[]
    }

    type Item = {
      title: string
      description: string
      icon: string
    }

    type Section = {
      title: string
      description: string
      id?: string
      orientation: string
      features: Feature[]
      reverse?: boolean
    }

    type Feature = {
      name: string
      description: string
      icon: string
    }

  }

}
