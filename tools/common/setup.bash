#!/usr/bin/env bash
set -e

if [ -z "$ELLIESPATH" ]; then
  echo "Please set \$ELLIESPATH."
  exit 1
fi

if [[ $PATH != *"$ELLIESPATH/tools/osx/64-bit/bin"* ]]; then
  echo "Please add \$ELLIESPATH/tools/osx/64-bit/bin to your \$PATH."
  exit 1
fi

cd "$ELLIESPATH"

echo ">> Installing go packages."

echo ">> Installing npm packages."
(cd web && npm install)

echo ">> Installing git hooks."
rm -rf .git/hooks
ln -s ../tools/common/githooks .git/hooks