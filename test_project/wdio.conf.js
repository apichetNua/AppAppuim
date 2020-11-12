exports.config = {
    services: ['appium'],
    port: 4723,
    runner: 'local',
    specs: [
        './test_cases/**/*.js'
    ],
    capabilities: [{
        maxInstances: 1,
        appiumVersion: '1.13.0',
        platformName: 'Android',
        platformVersion: '8.1.0',
        deviceName: 'emulator-5554',
        app: 'C:\\Users\\anuam\\Downloads\\react-native-appium-master\\react-native-appium-master\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk',
        automationName: 'UiAutomator2'
    }],
    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 50000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
