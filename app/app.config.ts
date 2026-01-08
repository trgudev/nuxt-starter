export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    button: {
      slots: { base: 'cursor-pointer' }
    },
    selectMenu: {
      slots: {
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }
    },
    select: {
      slots: {
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }
    }
  }
})
