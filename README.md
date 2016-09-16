
Docker Swarm mode (1.12.1) test with NodeJs
====
### Init docker Swarm
https://docs.docker.com/engine/swarm/swarm-tutorial/

### create service
docker service create --replicas 1 --name swarmtest --publish 8089:4000 ypelud/docker-swarm-test

### scale service
docker service scale swarmtest=5
