import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'
export default function QRScanner() {
    const [result, setresult] = useState('')
    const [isScanned, setisScanned] = useState(false)
    function handleScan(data) {
        if (data != null) {
            console.log(data)
            setresult(data.text)
            setisScanned(true)
        }
    }
    function handleError(err) {
        console.error(err)
    }
    const previewStyle = {
        height: 240,
        width: 320,
    }
    return (
        <div>
            <p>QRScanner</p>
            {!isScanned ?
                <QrReader
                    key="environment"
                    constraints={{ facingMode: 'environment' }}
                    delay={2000}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                />
                :
                <p>{result}</p>
            }


        </div>
    )
}
