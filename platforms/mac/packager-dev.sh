APP_VERSION=6.0
BUILD_VERSION=6.0.2
ELECTRON_VERSION=1.4.6

# Name of your app.
APP="Modern Translator"
# The path of you app to sign.
APP_PATH="Modern Translator-mas-x64/Modern Translator.app"
# The path of development provisioning profile
PROVISION_PROFILE_PATH="development.provisionprofile"

electron-packager ./ "Modern Translator" --app-bundle-id=com.moderntranslator.app --helper-bundle-id=com.moderntranslator.app.helper --app-version=$APP_VERSION --build-version=$BUILD_VERSION --platform=mas --arch=x64 --version=$ELECTRON_VERSION --icon=images/icon.icns --overwrite

electron-osx-sign "$APP_PATH" --version=$ELECTRON_VERSION --provisioning-profile=$PROVISION_PROFILE_PATH
