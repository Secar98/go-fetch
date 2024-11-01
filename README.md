
# Go-Fetch

## About

This is the official Wails Svelte-TS template for the Go-Client application. It combines the power of Go for backend development with Svelte and TypeScript for the frontend.

## Features

- **Go Backend**: Leverage the power of Go for backend development.
- **Svelte Frontend**: Use Svelte and TypeScript for a modern, reactive frontend.
- **Hot Reload**: Fast hot reload for frontend changes during development.
- **Cross-Platform**: Build and run on Windows, macOS, and Linux.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **Go**: Install Go from [golang.org](https://golang.org/).
- **Wails**: Install Wails by following the instructions at [wails.io](https://wails.io/docs/gettingstarted/installation).

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/go-client.git
    cd go-client
    ```

2. **Install dependencies**:
    ```sh
    wails build
    ```

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser and have access to your Go methods, there is also a dev server that runs on [http://localhost:34115](http://localhost:34115). Connect to this in your browser, and you can call your Go code from devtools.

```sh
wails dev
```

## Building

To build a redistributable, production mode package, use `wails build`.

```sh
wails build
```

## Usage

### Request and Response Containers

The application includes a `RequestContainer` and a `ResponseContainer` to handle HTTP requests and responses.

#### RequestContainer

The `RequestContainer` allows you to configure and send HTTP requests. It includes sections for JSON, FormData, and URL-encoded bodies.

```svelte
<script>
    import BodyContainer from './sub-containers/request/BodyContainer.svelte';
    import Headers from './sub-containers/request/RequestHeaders.svelte';
    import QueryParams from './sub-containers/request/RequestQueryParams.svelte';
    let currentSection = 'body';
    function renderSection(section) {
        switch (section) {
            case 'body':
                return BodyContainer;
            case 'headers':
                return Headers;
            case 'params':
                return QueryParams;
            default:
                return null;
        }
    }
</script>
<div>
    <h1 class="text-xl mb-4">Request</h1>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <button on:click={() => currentSection = 'body'} class="btn btn-sm">Body</button>
        <button on:click={() => currentSection = 'headers'} class="btn btn-sm">Headers</button>
        <button on:click={() => currentSection = 'params'} class="btn btn-sm">Params</button>
    </div>
    
    {#if renderSection(currentSection)}
        <svelte:component this={renderSection(currentSection)} />
    {/if}
</div>
```

#### ResponseContainer

The `ResponseContainer` displays the response from the server, including the status code and body.

```svelte
<script>
    import ResponseBodyContainer from './sub-containers/response/ResponseBodyContainer.svelte';
    import ResponseHeaders from './sub-containers/response/ResponseHeaders.svelte';
    let showSection = 'body';
</script>

<div>
    <h1 class="text-xl mb-4">Response</h1>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <button class="btn btn-sm" on:click={() => showSection = 'body'}>Body</button>
        <button class="btn btn-sm" on:click={() => showSection = 'headers'}>Headers</button>
    </div>
    
    {#if showSection === 'body'}
        <ResponseBodyContainer />
    {/if}
    {#if showSection === 'headers'}
        <ResponseHeaders />
    {/if}
</div>
```

### Configuration

The project configuration is managed through the `wails.json` file.

```json
{
  "$schema": "https://wails.io/schemas/config.v2.json",
  "name": "go-client",
  "outputfilename": "go-client",
  "frontend:install": "npm install",
  "frontend:build": "npm run build",
  "frontend:dev:watcher": "npm run dev",
  "frontend:dev:serverUrl": "auto",
  "author": {
    "name": "Sebbe",
    "email": "sebcar98@gmail.com"
  }
}
```

## Contact

For any inquiries, please contact Sebbe at [sebcar98@gmail.com](mailto:sebcar98@gmail.com).