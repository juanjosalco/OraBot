#!/bin/bash

cd backend && mvn spring-boot::run

sleep 20

cd src/orabot && npm start