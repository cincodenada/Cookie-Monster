#!/bin/bash
MINIFIER=$1

if [ -z $MINIFIER ]; then
    echo "You must specify a minifier to use."
    echo "Currently available are:"
    echo "jslint,closure,web"
    exit 1
fi

if [ "$MINIFIER" == "jslint" ]; then
    ./minifiers/jslint/jslint < core.js > core.js.min
elif [ "$MINIFIER" == "closure" ]; then
    java -jar ./minifiers/google-closure/compiler.jar --js core.js --js_output_file core.js.min --compilation_level ADVANCED_OPTIMIZATIONS
elif [ "$MINIFIER" == "web" ]; then
    curl -X POST -s --data-urlencode 'input@core.js' http://javascript-minifier.com/raw > core.js.min
fi
