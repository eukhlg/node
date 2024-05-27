FROM debian
RUN apt update && apt install -y nodejs
COPY index.js /
CMD ["/usr/bin/node", "index.js"]
