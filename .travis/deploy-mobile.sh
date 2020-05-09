#!/bin/sh


# This upload script is both for iOS and Android.

UPLOADER_VERSION=2.13

# Should email testers about new version. Set to "off" to disable email notifications.
NOTIFY="on"

# Tester Groups that will be notified in case NOTIFY equals "on".
# When set to "all", all testers in the account will be notified.
# In order to notify specific groups, create those groups in https://app.testfairy.com/testers/ 
# In case of more than one group seperate by comma. Example "family,friends"
# This param is mandatory in case NOTIFY is on.
TESTERS_GROUPS="echo $([[ $CURB_VERSION == "develop" ]] && echo "develop" || echo "team")"

# If AUTO_UPDATE is "on" users of older versions will be prompt to update to this build next time they run the app
AUTO_UPDATE="echo $([[ $CURB_VERSION == "develop" ]] && echo "on" || echo "off")"

# Use comment field to add release notes. Text will be included in the email sent to testers and in landing pages.
COMMENT=

# locations of various tools
CURL=curl

SERVER_ENDPOINT=https://upload.testfairy.com

verify_tools() {

	# Windows users: this script requires curl. If not installed please get from http://cygwin.com/

	# Check 'curl' tool
	"${CURL}" --help >/dev/null
	if [ $? -ne 0 ]; then
		echo "Could not run curl tool, please check settings"
		exit 1
	fi
}

verify_settings() {
	if [ -z "${TESTFAIRY_API_KEY}" ]; then
		usage
		echo "Please update API_KEY with your private API key, as noted in the Settings page"
		exit 1
	fi
}

# before even going on, make sure all tools work
verify_tools
verify_settings

APP_FILENAME=$1
if [ ! -f "${APP_FILENAME}" ]; then
	usage
	echo "Can't find file: ${APP_FILENAME}"
	exit 2
fi

SYMBOLS_FILE=$2
if [ ! -f "${SYMBOLS_FILE}" ]; then
	usage
	echo "Can't find file: ${SYMBOLS_FILE}"
	exit 2
fi

# temporary file paths
DATE=`date`

JSON=$( "${CURL}" -s ${SERVER_ENDPOINT}/api/upload -F api_key=${TESTFAIRY_API_KEY} -F file="@${APP_FILENAME}" -F symbols_file="@${SYMBOLS_FILE}" -F comment="${COMMENT}" -F testers-groups="${TESTERS_GROUPS}" -F auto-update="${AUTO_UPDATE}" -F notify="${NOTIFY}" -A "TestFairy Command Line Uploader ${UPLOADER_VERSION}" )

URL=$( echo ${JSON} | sed 's/\\\//\//g' | sed -n 's/.*"app_url"\s*:\s*"\([^"]*\)".*/\1/p' )
if [ -z "$URL" ]; then
	echo "FAILED!"
	echo
	echo "Build uploaded, but no reply from server. Please contact support@testfairy.com"
	exit 1
fi

echo "OK!"
