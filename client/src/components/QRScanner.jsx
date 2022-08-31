import React, { useState,useEffect } from 'react'
import axios from 'axios'
import QrReader from 'react-qr-scanner'
export default function QRScanner() {
    const [result, setresult] = useState('')
    const [isScanned, setisScanned] = useState(false)
    async function postData(chargerId){
        const tempData = {
            timestamp:Date.now(),
            userId:'HMEUser001',
            chargerId,
        }
        const resp = await axios.post('http://localhost:9494/hme',tempData)
        const data = await resp.data
        if(data.status){
            setresult('Success')
        }
    }
    function handleScan(data) {
        if (data != null) {
            setisScanned(true)
            postData('HMECharger001')
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
                    // key="environment"
                    // constraints={{facingMode:'environment'}}
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
