FROM nginx:latest
WORKDIR /app
RUN apt update && apt install nginx -y
COPY main.py .
EXPOSE 80
CMD ["nginx","-g", "daemon off;"]