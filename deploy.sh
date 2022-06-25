#!/usr/bin/env sh

npm run build

cd build
git init && git add -A && git commit -m 'deploy'
git remote add origin git@github.com:csugulo/csugulo.github.io.git
git push -u origin deploy