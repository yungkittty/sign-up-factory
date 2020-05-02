#!/bin/bash


set -e

# Archives symbols for TestFairy's crash reports.
# https://docs.testfairy.com/iOS_SDK/Uploading_dSyms_to_TestFairy.html
zip -q -r curb-symbols.zip app/build/intermediates/symbols/release/R.txt

# Renames .apk.
mv app/build/outputs/apk/release/app-release.apk curb.apk

# Uploads .apk to TestFairy.
bash ../.travis/deploy-mobile.sh curb.apk curb-symbols.zip
