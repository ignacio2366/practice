package com.example

import android.content.Intent
import android.os.Bundle
import android.os.PersistableBundle
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

import com.facebook.react.modules.core.DeviceEventManagerModule

class LogSurveyActivity : ReactActivity() {

    private val TAG = "LogSurveyActivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("LogActivity", "Testing start")
        intent?.handleIntent()

    }
    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        intent?.handleIntent()
    }
    private fun Intent.handleIntent() {
        val data = intent.data
        Log.d("LogActivity", "Testing handlle intent" + data)

        if(data.toString() == "SAD"){
            Log.d("Shorcuts is pressed", "Testing handlle intent" + data)
        }
    }



}