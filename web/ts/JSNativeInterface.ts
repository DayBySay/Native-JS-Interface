interface JSNativeInterface {
    send(name: string, params: Object): void
}

export class JSNativeInterfaceObject {
    jsInterface: JSNativeInterfaceIOS

    constructor(jnInterface: JSNativeInterfaceIOS) {
        this.jsInterface = jnInterface
    }
    send(name: string, params: Object) {
    }
}

export class JSNativeInterfaceIOS implements JSNativeInterface {
    send(name: string, params: Object) {
        // @ts-ignore
        webkit.messageHandlers.NativeJSInterface.postMessage({name: params})
    }
}

export class JSNativeInterfaceAndroid implements JSNativeInterface {
    send(name: string, params: Object) {
        // @ts-ignore
        Android.showToast("hogehoge")
    }
}