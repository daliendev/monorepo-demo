FROM gitpod/workspace-full:latest

# Get Symfony CLI https://symfony.com/download
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN sudo mv /home/gitpod/.symfony5/bin/symfony /usr/local/bin/symfony

EXPOSE 5173 8000
