/*
 * Author: A.G.
 *   Date: 2021/09/26
 */

// TODO: Setup UDP server on port 7887.

import dgram from 'dgram';

// Main.
((async () => {
    const server = dgram.createSocket('udp4');

    server.on('error', (err) => {
        console.log(`server error:\n${err.stack}`);
        server.close();
    });

    server.on('message', (msg, rinfo) => {
        console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });

    server.on('listening', () => {
        const address = server.address();
        console.log(`server listening ${address.address}:${address.port}`);
    });

    server.bind(7887);
})());
