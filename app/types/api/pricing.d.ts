declare namespace Api {
  declare namespace PricingManage {
    type PricingPageData = {
      title: string
      description: string
      extension: string
      faq: Faq
      logos: Logos
      plans: Plan[]
      seo: Seo
    }

    type Faq = {
      title: string
      description: string
      items: Item[]
    }

    type Item = {
      label: string
      content: string
    }

    type Logos = {
      title: string
      icons: string[]
    }

    type Plan = {
      title: string
      description: string
      price: Price
      button: App.Button.Button
      features: string[]
      highlight?: boolean
      scale?: boolean
    }

    type Price = {
      month: string
      year: string
    }

    type Seo = {
      title: string
      description: string
    }
  }
}
