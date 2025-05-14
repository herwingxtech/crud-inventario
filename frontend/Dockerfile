# frontend/Dockerfile
FROM nginx:alpine

# Copiar todos los archivos necesarios para servir el frontend
COPY ./public /usr/share/nginx/html
COPY ./js /usr/share/nginx/html/js
COPY ./nginx.conf /etc/nginx/conf.d/default.conf