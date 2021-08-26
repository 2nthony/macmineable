#!/bin/sh
# https://xie.infoq.cn/article/4b954f196d6d4a288c8c6981c

NAME="macMineable"
OUT="out"
APP="$NAME.app"
VERSION=$(sed -n 's/.*"version": "\(.*\)",/\1/p' package.json)

echo "Creating macOS app structure"
mkdir -p $OUT/$APP/Contents/{MacOS,Resources}

echo "Writing 'Info.plist'"
cat > $OUT/$APP/Contents/Info.plist << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleExecutable</key>
	<string>$NAME</string>
	<key>CFBundleIconFile</key>
	<string>icon.icns</string>
	<key>CFBundleIdentifier</key>
	<string>io.2nthony.$NAME</string>
	<key>NSHighResolutionCapable</key>
  <true/>
	<key>LSUIElement</key>
  <string>1</string>
</dict>
</plist>
EOF

echo "Building Go app"
go build -o $OUT/$APP/Contents/MacOS/$NAME

echo "Copying files"
cp -r icon.icns $OUT/$APP/Contents/Resources
cp -r assets $OUT/$APP/Contents/Resources
cp -r dist $OUT/$APP/Contents/Resources

echo "Compressing '$APP'"
cd $OUT
zip -q -9 -r $NAME-$VERSION.zip $APP

echo "Done!"
