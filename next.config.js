/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                
            },
            {
                protocol:'https',
                hostname:'images2.imgbox.com'
            },
            {
                protocol: 'https',
                hostname: 'farm8.staticflickr.com',
                port: '',
                pathname: '/7647/16581815487_6d56cb32e1_b.jpg',
            }
        ],
    },
}
