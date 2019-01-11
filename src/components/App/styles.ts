import { keyframes } from '@emotion/core'
import { Interpolation } from '@emotion/css'

const AppLogoSpin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

export default {
  App: {
    textAlign: 'center',
  } as Interpolation,
  AppLogo: {
    animation: `${AppLogoSpin} infinite 20s linear`,
    height: '40vmin',
  },
  AppHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  } as Interpolation,
  AppLink: {
    color: '#f26ec5',
  },
}
