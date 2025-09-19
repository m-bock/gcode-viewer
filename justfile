dev:
    npx vite

build:
    npx vite build --base gcode-viewer

preview:
    npx vite preview

view:
    just build && just preview

deploy:
    #!/usr/bin/env bash
    set -e
    npm ci
    just build
    npx gh-pages -d dist

# Generate TypeScript declaration files for CSS modules
css-dts:
    npx tcm src --pattern "**/*.module.css"

# Watch CSS modules and generate declaration files automatically
watch-css-dts:
    npx tcm src --camelCase --pattern "**/*.module.css" --watch
