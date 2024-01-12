import { dlopen } from 'bun:ffi';

const PORT = 8080;

const lib = dlopen('./libhello.so', {
    // Expects hello.zig to be compiled with:  zig build-lib hello.zig -dynamic -O ReleaseSafe
    main: {
        returns: 'cstring',
        args: []
    }
});

const apiHandler = () => {
    return new Response(JSON.stringify({
        response: lib.symbols.main()
    }));
}

Bun.serve({
    port: 8080,
    development: Boolean(process.env.DEVMODE),

    fetch(req) {
        const url = new URL(req.url);
        switch (url.pathname) {
            case "/api":
                return apiHandler();
            default:
                return new Response(JSON.stringify({ error: `Path ${url.pathname} not recognized.` }), { status: 404 })
        }
        throw new Error();
    }
});

console.log(`Server running on localhost:${PORT}`);