const Mux = require('mux.js')
var fs = require('fs')
var path = require('path');

const checkMp4Codec = (videoFile) => {
    const tracks = Mux.mp4.probe.tracks(videoFile)
    console.log(tracks)
    video = tracks.filter((t) => t.type == 'video')
    audio = tracks.filter((t) => t.type == 'audio')
}

const videoFolder = './videos'
fs.readdir(videoFolder, (err, files) => {
    files.forEach((file, index) => {
        console.log(file)
        try {
            const videoFile = fs.readFileSync(`${videoFolder}/${file}`)
            checkMp4Codec(videoFile)
        } catch (error) {
            console.log(error)
        }
    })
})
