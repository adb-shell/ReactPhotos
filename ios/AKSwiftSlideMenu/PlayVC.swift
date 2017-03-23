//
//  PlayVC.swift
//  AKSwiftSlideMenu
//
//  Created by MAC-186 on 4/8/16.
//  Copyright © 2016 Kode. All rights reserved.
//

import UIKit
import React

class PlayVC: BaseViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        addSlideMenuButton()
        addReactView()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    //functions add view from index.ios.js
    func addReactView(){
        
        let reactView = RCTRootView(
            bundleURL: URL(string: "http://localhost:8081/index.ios.bundle?platform=ios"),
            moduleName: "PhotoComponent",
            initialProperties: ["type":false],
            launchOptions:nil
            )!
        
        
        
        self.view = reactView;
    }
    
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
