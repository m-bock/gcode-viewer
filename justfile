dev:
    npx vite

build:
    npx vite build

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
