import { JSNativeInterfaceObject, JSNativeInterfaceAndroid, JSNativeInterfaceIOS } from './JSNativeInterface'

let ua = navigator.userAgent

if (ua.indexOf("iPhone") !== -1) {
    let jnintfiOS = new JSNativeInterfaceIOS() 
    let obj = new JSNativeInterfaceObject(jnintfiOS)
    obj.send("hoge", {"fuga": "nyassu"})
}

if (ua.indexOf("Android") !== -1) {
    let jnintfAndroid = new JSNativeInterfaceAndroid() 
    let obj = new JSNativeInterfaceObject(jnintfAndroid)
    obj.send("hoge", {"fuga": "nyassu"})
}
