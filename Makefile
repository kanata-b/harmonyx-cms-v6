# HarmonyX CMS - Full Stack Management
.PHONY: help setup dev prod directus nextjs kong kong-setup stop clean logs

help: ## แสดงคำสั่งที่ใช้ได้
	@echo "Available commands:"
	@echo "  make setup      - เตรียม environment files"
	@echo "  make docker     - รัน Docker"
	@echo "  make kong-setup - ตั้งค่า Kong routes และ services (database mode)"
	@echo "  make stop       - หยุด containers ทั้งหมด"
	@echo "  make clean      - ลบ containers, images และ volumes"
	@echo "  make logs       - ดู logs ของทุก services"

setup: ## เตรียม environment files
	@if not exist .env (copy .env.example .env && echo Created .env from .env.example)
	@if not exist directus\.env (copy directus\.env.example directus\.env && echo Created directus/.env)
	@if not exist nextjs\.env (copy nextjs\.env.example nextjs\.env && echo Created nextjs/.env)
	@echo Environment files are ready! Please edit them as needed.

docker: ## รัน docker build
	docker-compose up -d --build

kong-setup: ## ตั้งค่า Kong routes และ services (database mode)
	@echo "Setting up Kong API Gateway..."
	@kong/setup-kong-database.bat

stop: ## หยุด containers ทั้งหมด
	docker-compose down

clean: ## ลบ containers, images และ volumes ทั้งหมด
	docker-compose down --volumes --rmi all
	docker system prune -f

logs: ## ดู logs ของทุก services
	docker-compose logs -f

logs-directus: ## ดู logs ของ Directus
	docker-compose logs -f directus database cache

logs-nextjs: ## ดู logs ของ Next.js
	docker-compose logs -f nextjs
