#!/bin/bash

if [ $# == 1 ]; then
	echo "Starting compass watch on $1"
	
	PROCESS=""
	PID=""
	PIDNODE=""

	PROCESS=$(ps -A | grep node | sed '/grep node/d')
	#echo "process $PROCESS"	
	ISNODE=`echo $PROCESS | grep "node"`
	#echo "es node? $ISNODE"
	if [ "$ISNODE" != "" ]; then

		PIDNODE=`echo $PROCESS | awk '{print $1}'`
		PID=$(ps -A | grep compass | sed '/grep compass/d' | awk '{print $1}')
		#echo "pid node $PIDNODE"
		#echo "pid compass $PID"
		while [ "$PIDNODE" != "" ]; do
			#echo "waiting"
			sleep 10

			PROCESS=`ps -A | grep node | sed '/grep node/d'`
			#echo "process while $PROCESS"
			ISNODE=`echo $PROCESS | grep "node"`
			#echo "es node? $ISNODE"
			if [ "$ISNODE" != "" ]; then
				PIDNODE=`echo $PROCESS | awk '{print $1}'`
				#echo "pid node $PIDNODE"
			else
				PIDNODE=""
				#echo "reseting pidnode"
			fi
		done
	fi
	
	if [ "$PID" != "" ]; then
		echo "ending compass watching..."
		kill -9 $PID
		echo "ended"
		exit 0
	fi
else
	echo "A working foder is needed"
fi
