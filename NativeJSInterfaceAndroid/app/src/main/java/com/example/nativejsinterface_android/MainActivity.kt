package com.example.nativejsinterface_android

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webView = findViewById<WebView>(R.id.web_view)
        webView.webViewClient = WebViewClient()
        webView.settings.javaScriptEnabled = true
        webView.addJavascriptInterface(WebAppInterface(this), "WebAppInterface")
        webView.loadUrl("http://10.172.40.71:8080")
    }
}

class WebAppInterface(private val context: Context) { // JavascriptInterfaceを公開するとJSから色々操作出来るようになるので、セキュリティ面の検討が必要
    @JavascriptInterface
    fun postMessage(json: String) {
        Toast.makeText(context, json, Toast.LENGTH_SHORT).show()
    }
}
