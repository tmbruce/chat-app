BLUE='\033[1;34m'

clear

cd native_module
rm -rf target
echo "${BLUE}Compiling native module for iOS"
cargo build --release --target aarch64-apple-ios-sim

rm *.h
cbindgen --lang c --crate native_module --output native_module.h

