Docker Swarm mode (1.12.1) test with HAProxy
===========

### Adapt haproxy to your configuration
```
server  app1_1 <your docker ip>:8089 cookie app1inst1 check inter 2000 rise 2 fall 5
```

### Run HAProxy container
```
docker run --rm --name my-running-haproxy -v $(PWD)/haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg:ro -p 8088:8088 haproxy:1.5
```
