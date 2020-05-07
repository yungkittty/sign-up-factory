#!/bin/bash


set -e

# Builds .apk using `Release` configuration.
./gradlew -q -x bundleReleaseJsAndAssets assembleRelease

zip -q -r app-symbols.zip app/build/intermediates/symbols/release/R.txt
