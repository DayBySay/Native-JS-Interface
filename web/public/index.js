function buttonClicked() {
    console.log("hogehoge")
    webkit.messageHandlers.NativeJSInterface.postMessage({"hoge": "fuga"})
    console.log("fugafuga")
}

function showToast() {
    Android.showToast("hogehoge")
}