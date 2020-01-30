# Host the proxy
FROM nginx:alpine as reverseproxy

# Configure NGINX
COPY ./nginx.conf /etc/nginx/conf.d/default.template

# Have an access to the proxy
EXPOSE 80 443