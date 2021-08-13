const { initializeApp } = require('firestore-export-import')

const serviceAccount = require('./serviceAccountKey.json')

// If you want to pass settings for firestore, you can add to the options parameters
const options = {
  firestore: {
    host: 'localhost:8080',
    ssl: false,
  },
}

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = '[DEFAULT]'
initializeApp(serviceAccount, appName, options)

// the appName & options are OPTIONAL
// you can initalize the app without them
// initializeApp(serviceAccount)
