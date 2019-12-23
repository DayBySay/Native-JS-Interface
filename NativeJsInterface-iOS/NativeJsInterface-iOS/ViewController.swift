//
//  ViewController.swift
//  NativeJsInterface-iOS
//
//  Created by Takayuki Sei on 2019/12/20.
//  Copyright © 2019 Takayuki Sei. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKScriptMessageHandler {
    @IBOutlet weak var webView: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        webView.configuration.userContentController.add(self, name: "NativeJSInterface")
        webView.load(URLRequest(url: URL(string: "http://10.172.40.71:8080")!))
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        print("controller:\(userContentController), message: \(message.name), value: \(message.body)")
    }
}

