dev:
	docker-compose up -d
	# docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build -d
build:
	docker-compose up --build
prod:
	docker-compose up --build -d
stop:
	docker-compose down
devtest:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build