FROM node
MAINTAINER Ronalds Sovas <sovas@dosje.in>

ADD translator /opt/translator
ADD readme.md /opt/readme.md
ADD run.sh /opt/run.sh

EXPOSE 8687