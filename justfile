dev:
    npx vite

build:
    npx vite build --base gcode-viewer

preview:
    npx vite preview

install:
    npm ci

deploy:
    npx gh-pages -d dist

set-version-patch:
    npm version patch

set-version-minor:
    npm version minor

set-version-major:
    npm version major

run-publish-minor: set-version-minor install build deploy

run-publish-patch: set-version-patch install build deploy

run-view: build preview
    