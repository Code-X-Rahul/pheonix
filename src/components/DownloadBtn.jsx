'use client';
import Hls from 'hls.js';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { useEffect, useRef, useState } from "react";

const ffmpeg = createFFmpeg({ log: true });

const DownloadBtn = ({ m3u8Url, outputFilename }) => {
    const [ready, setReady] = useState(false)
    const [url, setUrl] = useState("");
    const downloadRef = useRef(null);

    const load = async (hlsUrl) => {
        await ffmpeg.load();
        setReady(true);
        const mp4Data = await convertHLSToMP4(hlsUrl);
        setUrl(mp4Data)
        console.log(mp4Data);
    }

    const m3u8Urls = "https://owt.webarchivecdn.com/_v10/6e3672bd5ddbd13cdf6891fbb15b61638d4337e3991538afa7a19ae04b4513ff144924f8a75183d2cde74b804329041178f79c64a6754e1d0d67ba1d3772a17eaefe1ad98c7722f67d110b927e07090e47b8d7b608dc084b5c19669b24d84b43beb6bbe12e62441c1fb607fc2e3d2fa7b2a97674a5573a8ea949bf2bde08bddbdc2853bfcb36eb4248cb51047a094bfc/360/index.m3u8";


    async function convertHLSToMP4(hlsUrl) {
        // Input file
        await ffmpeg.write('input.ts', await fetchFile(hlsUrl));

        // Run the conversion
        await ffmpeg.run('-i', 'input.ts', 'output.mp4');

        // Read the output file
        const data = ffmpeg.read('output.mp4');

        // Cleanup
        await ffmpeg.remove('input.ts');
        await ffmpeg.remove('output.mp4');

        return data;
    }

    // Call the conversion function with the HLS URL
    const hlsUrl = m3u8Urls

    useEffect(() => {
        load(hlsUrl)
    }, [])

    if (!ready) return <h1 className='text-white'>Loading....</h1>
    return (
        <>
            <a className="text-black p-2 bg-gray-600" ref={downloadRef} href={url} download={outputFilename}></a>
        </>
    )
}

export default DownloadBtn