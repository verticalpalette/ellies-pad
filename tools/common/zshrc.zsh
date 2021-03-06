#!/usr/bin/env zsh

ZSHRC_DIR=$(dirname $0:A)
export ELLIESPATH=${ZSHRC_DIR/\/tools\/common/}
export GOPATH=${ELLIESPATH/src\/github.com\/verticalpalette\/ellies-pad/}
export GOPATH="$GOPATH:$ELLIESPATH/3rdparty/go"

alias ep="cd $ELLIESPATH"

# git subrepo
if [[ $PATH != *$ELLIESPATH/tools/common/git-subrepo* ]]; then
  source "$ELLIESPATH/tools/common/git-subrepo/init"
fi

# antigen
source "$ELLIESPATH/tools/common/antigen/antigen.zsh"

# zsh themes and plugins
antigen use oh-my-zsh

antigen bundle git
antigen bundle npm
antigen bundle tmux
antigen bundle zsh-users/zsh-syntax-highlighting
antigen theme minimal

antigen apply
