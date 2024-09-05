#! /bin/bash

npm run build
git add .

echo Ready to deploy, what shall your commit message be?
read msg
echo Initializing commit - $msg 
git commit -am "$msg"
git push heroku master
