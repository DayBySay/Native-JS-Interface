interface JSNativeInterface {
    postMessage(name: string, params: Object): void
}

export class JSNativeInterfaceObject {
    jsInterface: JSNativeInterfaceIOS

    constructor(jnInterface: JSNativeInterfaceIOS) {
        this.jsInterface = jnInterface
    }
    postMessage(name: string, params: Object) {
        this.jsInterface.postMessage(name, params)
    }
}

export class JSNativeInterfaceIOS implements JSNativeInterface {
    postMessage(name: string, params: Object) {
        // @ts-ignore
        webkit.messageHandlers.NativeJSInterface.postMessage({"name": name, "params" : params})
    }
}

export class JSNativeInterfaceAndroid implements JSNativeInterface {
    postMessage(name: string, params: Object) {
        // @ts-ignore
        WebAppInterface.postMessage({"name": name, "params" : params})
    }
}