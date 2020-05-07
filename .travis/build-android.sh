#!/bin/bash


set -e

# Builds .apk using `Release` configuration.
./gradlew -q -x bundleReleaseJsAndAssets assembleRelease
