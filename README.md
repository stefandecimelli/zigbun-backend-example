# api-jan2024

### Requirements
- zig: ^0.12.0
- bun: ^1.0.21

## Development

To run the server in dev mode, you first need to compile the zig code with:
```
npm run compile
```
then you can start the server with:
```
npm run dev
```

Test the server with:
```
curl -s localhost:8080/api
```

This project was created using `bun init` in bun v1.0.21. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
