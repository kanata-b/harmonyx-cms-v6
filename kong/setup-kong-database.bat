@echo off
echo Setting up Kong API Gateway in Database Mode...
echo.

REM Create Directus Service
echo Creating Directus service...
curl -i -X POST http://localhost:8001/services ^
  --data "name=directus-service" ^
  --data "url=http://directus:8055"
echo.

REM Create Next.js Service  
echo Creating Next.js service...
curl -i -X POST http://localhost:8001/services ^
  --data "name=nextjs-service" ^
  --data "url=http://nextjs:3000"
echo.

REM Create Directus Route
echo Creating Directus route (/cms)...
curl -i -X POST http://localhost:8001/services/directus-service/routes ^
  --data "name=directus-route" ^
  --data "paths[]=/cms" ^
  --data "strip_path=true" ^
  --data "regex_priority=100"
echo.

REM Create Next.js Root Route
echo Creating Next.js root route (/)...
curl -i -X POST http://localhost:8001/services/nextjs-service/routes ^
  --data "name=nextjs-root" ^
  --data "paths[]=/" ^
  --data "strip_path=false" ^
  --data "regex_priority=0"
echo.

REM Create Next.js Frontend Route
echo Creating Next.js frontend route (/frontend)...
curl -i -X POST http://localhost:8001/services/nextjs-service/routes ^
  --data "name=nextjs-frontend" ^
  --data "paths[]=/frontend" ^
  --data "strip_path=true" ^
  --data "regex_priority=50"
echo.

REM Enable CORS for Directus
echo Adding CORS plugin to Directus service...
curl -i -X POST http://localhost:8001/services/directus-service/plugins ^
  --data "name=cors" ^
  --data "config.origins=*" ^
  --data "config.methods=GET,POST,PUT,PATCH,DELETE,OPTIONS" ^
  --data "config.headers=Authorization,Content-Type" ^
  --data "config.credentials=true"
echo.

REM Enable CORS for Next.js
echo Adding CORS plugin to Next.js service...
curl -i -X POST http://localhost:8001/services/nextjs-service/plugins ^
  --data "name=cors" ^
  --data "config.origins=*" ^
  --data "config.methods=GET,POST,PUT,PATCH,DELETE,OPTIONS" ^
  --data "config.headers=Authorization,Content-Type" ^
  --data "config.credentials=true"
echo.

echo Kong setup completed!
echo.
echo Services available:
echo - Frontend: http://localhost:8000/
echo - CMS Admin: http://localhost:8000/cms/admin
echo - CMS API: http://localhost:8000/cms/items/[collection]
echo - Kong Admin: http://localhost:8001/
