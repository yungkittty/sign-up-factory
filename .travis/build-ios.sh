#!/bin/bash


set -e

# Creates keychain to store certificates.
security create-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security default-keychain -s ios-build.keychain
security unlock-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security set-keychain-settings -t 3600 -l ~/Library/Keychains/ios-build.keychain

# Imports certificates to keychain.
security import curb-apple.cer -k ios-build.keychain -A
security import curb-developer.cer -k ios-build.keychain -A
security import curb-development-key.cer.p12 -k ios-build.keychain -P "$DEV_KEY_PASSWORD" -A

# Allows codesigning.
# https://stackoverflow.com/a/40039594
security set-key-partition-list -S apple-tool:,apple: -s -k "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain

# Copies mobile provision.
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp curb.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/

# Podfile
pod install

# Builds .xcarchive using `Release` configuration, then create .ipa from it.
xcodebuild -quiet archive -workspace curb.xcworkspace -scheme curb -configuration Release -archivePath curb.xcarchive
xcodebuild -quiet -exportArchive -archivePath curb.xcarchive -exportOptionsPlist exportOptions.plist -exportPath "export"
