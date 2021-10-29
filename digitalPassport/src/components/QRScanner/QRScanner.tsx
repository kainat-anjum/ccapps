import { useState, useRef, useEffect, useCallback } from 'react'
import Webcam from 'react-webcam'
import QrCode from 'qrcode-reader'

export const QRScanner = () => {
    const qr = new QrCode()
    const [isDetected, setDetected] = useState<boolean>(false)
    const webcamRef = useRef(null)
    const canvasRef = useRef(null)
    const frameId = useRef(null)

    function drawLine(begin, end, color, context) {
        context.beginPath()
        context.moveTo(begin.x, begin.y)
        context.lineTo(end.x, end.y)
        context.lineWidth = 4
        context.strokeStyle = color
        context.stroke()
    }

    const drawCanvasAndDetect = () => {
        async function renderFrame() {
            const videoElement = webcamRef.current.video
            const canvasElement = canvasRef.current
            videoElement.width = canvasElement.width = 350
            videoElement.height = canvasElement.height = videoElement.videoHeight
            const context = canvasElement.getContext('2d')
            context.clearRect(0, 0, videoElement.videoWidth, canvasElement.height)
            context.drawImage(videoElement, 0, 0, videoElement.videoWidth, canvasElement.height)
            let detected = false
            if (canvasElement.width && canvasElement.height) {
                const imageData = context.getImageData(0, 0, videoElement.videoWidth, canvasElement.height)
                qr.callback = function (err, value) {
                    if (err) {
                        setDetected(false)
                    }
                    if (value) {
                        detected = true
                        setDetected(true)
                        cleanUpFrames()
                        drawLine(value.points[0], value.points[1], '#FF3B58', context)
                        drawLine(value.points[1], value.points[2], '#FF3B58', context)
                        drawLine(value.points[2], value.points[3], '#FF3B58', context)
                        drawLine(value.points[3], value.points[0], '#FF3B58', context)
                        window.location = value.result
                    }
                }
                qr.decode(imageData)
            }
            !detected && requestAnimationFrame(renderFrame)
        }
        frameId.current = requestAnimationFrame(renderFrame)
    }

    useEffect(() => {
        if (typeof webcamRef.current !== 'undefined' && webcamRef.current !== null) {
            drawCanvasAndDetect()
        }
    }, [webcamRef.current])

    const cleanUpFrames = useCallback(() => {
        frameId && cancelAnimationFrame(frameId.current)
    }, [frameId])

    useEffect(() => {
        return () => {
            cleanUpFrames()
        }
    }, [])

    return (
        <div>
            <div id="output" hidden={isDetected}>
                <div id="outputMessage">No QR code detected.</div>
            </div>
            <div>
                <Webcam
                    ref={webcamRef}
                    videoConstraints={{
                        facingMode: 'environment'
                    }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        zIndex: 1,
                        objectFit: 'cover'
                    }}
                    width={350}
                />
                <canvas
                    id="canvas"
                    ref={canvasRef}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        zIndex: 9
                    }}
                ></canvas>
            </div>
        </div>
    )
}
