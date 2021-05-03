const Mux = require('mux.js')
var fs = require('fs')
var path = require('path');

const checkMp4Codec = (videoFile) => {
    const tracks = Mux.mp4.probe.tracks(videoFile)
    console.log(tracks)
    video = tracks.filter((t) => t.type == 'video')[0]
    audio = tracks.filter((t) => t.type == 'audio')[0]

    let videoCompativel, audioCompativel

    if (video && video.codec === 'avc1.64001f') {
        videoCompativel = true
    }
    if (audio && audio.codec === 'mp4a.40.2') {
        audioCompativel = true
    }
    console.log(videoCompativel && audioCompativel ? "COMPATIVEL":"INCOMPATIVEL")
}


const videoFolder = './videos'
fs.readdir(videoFolder, (err, files) => {
    files.forEach((filename, index) => {
        console.log(`${index} - filename: ${filename}`)
        try {
            const videoFile = fs.readFileSync(`${videoFolder}/${filename}`)
            checkMp4Codec(videoFile)
        } catch (error) {
            console.log(error)
        }
        console.log('\n\n')
    })
})
