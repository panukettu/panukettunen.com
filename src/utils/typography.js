import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.bodyFontFamily = ['Consolas']

bootstrapTheme.overrideThemeStyles = () => ({
  body: {
    backgroundImage:
      'linear-gradient(to bottom, #01060d, #001a22, #002a28, #00391e, #314405)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete bootstrapTheme.googleFonts

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
