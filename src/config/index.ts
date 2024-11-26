import cli from './cli.config'
import setting from './setting.config'
import theme from './theme.config'
import network from './net.config'

export default {
  ...cli,
  ...setting,
  ...theme,
  ...network,
}
