
const configs = {
    MJBM17062900243: {
        socket_id: 18567,
        sendback_appserver: 100000007
    }
}
const msg = {}

const config2 = {}
for (let c in configs) {
    let config = configs[c]
    config2[config['sendback_appserver']] = {
        imei: c,
        socket_id: config['socket_id']
    }
    
}
msg.config = configs
msg.config2 = config2

const config = msg.config

const jsonData = {"p":"log_in","param":{"imei":"MJBM17062900243","mcu_version":"2017032777","wifi_version":"2017040177","w-mac":"C89346CC30DA","z-mac":"1","ssid":"Sun"}}
//指令
const p = jsonData['p']
let imei = null

let socket_id = null
if (p === 'log_in' || p === 'active') {
    imei = jsonData['param']['imei']
    socket_id = config[imei]['socket_id']
    console.log(111111111)
}else {
    console.log(111111111)
    imei = jsonData['sendback_appserver']['imei']
    socket_id = config[imei]['socket_id']
}

console.log(imei)
console.log(socket_id)