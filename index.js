// IMPORTS
const express = require('express')
const arduinoLibrary = require('johnny-five')

// DEFINES
const app = express()
const arduino = new arduinoLibrary.Board({port: 'COM6'})

arduino.on('ready', () => {
    // ROUTES
    app.get('/allumer-led', (req, res) => {
        arduino.digitalWrite(8, true)
        res.json({success: true})
    })

    app.get('/eteindre-led', (req, res) => {
        arduino.digitalWrite(8, false)
        res.json({success: true})
    })
})

// START SERVER
app.listen(5000, console.log('Server running on port 5000'))