#!/bin/sh
if [ "$1" = "build" ];then
    mkdir /home/changsheng/project/project16190/project
    cp -a /home/changsheng/project/project16190/server/. /home/changsheng/project/project16190/project/
    cd /home/changsheng/project/project16190/project
    rm -rf /home/changsheng/project/project16190/server
    echo "执行成功"
fi
