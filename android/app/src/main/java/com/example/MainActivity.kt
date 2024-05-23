package com.example

import android.content.Intent
import android.os.Bundle
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.bridge.Arguments
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.modules.core.DeviceEventManagerModule

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        intent?.handleIntent()

    }
    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        intent?.handleIntent()
    }
    private fun Intent.handleIntent() {
        val data = intent.data
        if(data.toString() == "SAD"){
            sendEventToReactNative("onShortcutPressed")
        }
    }
    private fun sendEventToReactNative(eventName: String) {

        Log.d("sendEventToReactNative", "Testingss handlle intent $eventName")
        try {
            val reactContext = reactNativeHost.reactInstanceManager.currentReactContext
                val eventEmitter = reactContext?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                eventEmitter?.emit(eventName, "Log Survey")

        } catch (e: Exception) {
            Log.d("MainActivity", "Exception in sending event to React Native", e)
        }
    }
  override fun getMainComponentName(): String = "example"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
