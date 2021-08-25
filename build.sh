#!/bin/sh
# https://xie.infoq.cn/article/4b954f196d6d4a288c8c6981c

NAME="macMineable"
APP="$NAME.app"
mkdir -p $APP/Contents/{MacOS,Resources}
go build -o $APP/Contents/MacOS/$NAME
cat > $APP/Contents/Info.plist << EOF
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
cp -r assets/ $APP/Contents/Resources
cp -r dist $APP/Contents/Resources/views
find $APP
