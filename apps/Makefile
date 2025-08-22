# HarmonyX CMS - Full Stack Management
.PHONY: help setup dev prod directus nextjs kong kong-setup stop clean logs

help: ## แสดงคำสั่งที่ใช้ได้
	@echo "Available commands:"
	@echo "  make setup      - เตรียม environment files"

setup: ## เตรียม environment files
	@if not exist directus\.env (copy directus\.env.example directus\.env && echo Created directus/.env)
	@if not exist nextjs\.env (copy nextjs\.env.example nextjs\.env && echo Created nextjs/.env)
	@echo Environment files are ready! Please edit them as needed.
