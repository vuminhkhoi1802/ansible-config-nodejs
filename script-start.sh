if [ ! -f server/public ]; then
  mkdir server/public
fi

docker-compose -f docker-compose-dev.yml up --build
