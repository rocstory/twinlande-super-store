const appConfig = require('../appConfig.json')

export default function getConfig(key) {
    return appConfig[key]
}