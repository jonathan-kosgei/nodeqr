# Nodeqr

## Getting Started

You can deploy the app via the compose file, which builds the nodeqr image, with

```
docker-compose up -d
```

This will deploy and nginx proxy in front of the nodeqr container and expose the API on port 80.

## QR Generation

**Root URL:** `http://nodeqr`

QR code requests support the following URL query parameters after the ? in the root URL:

| Parameter     | Required      | Description  |
| ------------- |:-------------:| -----:|
| content=hello+world   | Required | The data to encode. Data can be digits (0-9), alphanumeric characters, binary bytes of data, or Kanji. |
| margin | Optional |   The width of the white border around the data portion of the code. This is in rows, not in pixels. |
| errorCorrectionLevel | Optional |  Can be one of **L, M, Q, H** Error correction capability allows to successfully scan a QR Code even if the symbol is dirty or damaged. Four levels are available to choose according to the operating environment. Higher levels offer a better error resistance but reduce the symbol's capacity. See below list for supported values |
| dark | Optional | Color of dark module. Value must be in hex format (RGBA). dark color should always be darker than light. |
| light | Optional | Color of light module. Value must be in hex format (RGBA). |


## Error Correction Level

Supported values include;

- L - [Default] Allows recovery of up to 7% data loss 
- M - Allows recovery of up to 15% data loss 
- Q - Allows recovery of up to 25% data loss 
- H - Allows recovery of up to 30% data loss

## Example

![alt text][logo]
[logo]: https://github.com/jonathan-kosgei/nodeqr/raw/master/hello-world.png