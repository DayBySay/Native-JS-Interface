import { JSNativeInterfaceObject, JSNativeInterfaceAndroid, JSNativeInterfaceIOS } from './JSNativeInterface'

let ua = navigator.userAgent

if (ua.indexOf("iPhone") !== -1) {
    callIOS()
}

if (ua.indexOf("Android") !== -1) {
    callAndroid()
}

function callIOS() {
    let jnintfiOS = new JSNativeInterfaceIOS() 
    let obj = new JSNativeInterfaceObject(jnintfiOS)
    obj.postMessage("hoge", {"fuga": "nyassu"})
}

function callAndroid() {
    let jnintfAndroid = new JSNativeInterfaceAndroid() 
    let obj = new JSNativeInterfaceObject(jnintfAndroid)
    obj.postMessage("hoge", {"fuga": "nyassu"})
}