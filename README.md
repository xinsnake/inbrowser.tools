# inbrowser.tools

Privacy-first developer tools. Use https://inbrowser.tools to protect your data - everything runs in your browser.

## Project Philosophy

- **Privacy First**: Your data never leaves your browser
- **No Server Processing**: All operations happen client-side
- **Open Source**: Fully transparent and auditable code
- **Simple & Fast**: No complex dependencies, just pure functionality

## Available Tools

### Encoders & Converters
- Base64 Converter
- Hex to ASCII Converter
- Number Base Converter (Binary/Decimal/Hex)
- Image to Base64 Converter
- QR Code Generator

### Data Tools
- JSON Formatter
- JSON YAML Converter
- JWT Token Decoder
- Markdown to HTML Preview

### Generators
- UUID Generator
- Password Generator
- Random Number Generator
- Random Bytes Generator
- Hash Calculator (MD5, SHA-1, SHA-256, SHA-384, SHA-512, SHA-3, RIPEMD-160)

### Utilities
- Character & Word Counter
- Unix Timestamp Converter
- Color Picker & Converter

## Technology Stack

- **Build**: Grunt with Pug templates
- **CSS**: Pico CSS v2 (minimal, classless framework)
- **Libraries**: All loaded via CDN (crypto-js, js-yaml, marked, qrcodejs)
- **Deployment**: AWS S3 static hosting

## Want to Contribute?

Please create a PR! We welcome new tools and improvements.

### Development Setup

1. Install dependencies: `npm install`
2. Run development server: `grunt` (watches for changes and rebuilds)
3. Serve the site: `http-server ./dist -a 127.0.0.1 -p 3000`
4. Visit `http://localhost:3000`

### Deployment To Your Own S3

- Run `grunt deploy` to build and deploy to S3 (requires `aws-keys.json`)

## License

MIT