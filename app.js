const express = require('express')
const app = express()
const QRCode = require('qrcode')

app.get('/create-qr', function (req, res) {
    var content = req.query.content
    if (typeof content !== 'undefined' && ! content) {
        res.send("You must pass in a content query parameter of type AlphaNumeric, Numeric, Byte or Kanji to be encoded.")
    }
    var errorCorrectionLevel = req.query.errorCorrectionLevel || 'L'
    var margin = req.query.margin || 4
    var dark = req.query.dark || '#000000ff'
    var light = req.query.light || '#ffffffff'

    var options = {
        errorCorrectionLevel: errorCorrectionLevel,
        margin: margin,
        color: {
            dark: dark,
            light: light // Transparent background
        }
    }

    QRCode.toDataURL(content, options, function (err, url) {
        if (err) res.send("Error message:"+err)
        res.send(url)
    })
})

app.listen(3000, function () {
  console.log('Node QR Generator listening on port 3000!')
})
