const appConfig = require('../appConfig.json')

export default function getConfig(key: string) {
    return appConfig[key]
}