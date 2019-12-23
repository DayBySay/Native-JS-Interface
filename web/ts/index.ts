import { JSNativeInterfaceObject, JSNativeInterfaceAndroid, JSNativeInterfaceIOS } from './JSNativeInterface'

let jnintfiOS = new JSNativeInterfaceIOS() 
let jnintfAndroid = new JSNativeInterfaceAndroid() 
let obj = new JSNativeInterfaceObject(jnintfiOS)
obj.send("hoge", {"fuga": "nyassu"})