export class JSNativeInterface {
    send(name: string, params: Object) {
        let ios = new JSNativeInterfaceIOS()
        ios.send(name, params)
    }
}

class JSNativeInterfaceIOS {
    send(name: string, params: Object) {
        // @ts-ignore
        webkit.messageHandlers.NativeJSInterface.postMessage({name: params})
    }
}

class JSNativeInterfaceAndroid {
    send(name: string, params: Object) {
        // @ts-ignore
        Android.showToast("hogehoge")
    }
}