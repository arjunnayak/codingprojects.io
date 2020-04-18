
#!/bin/bash

set -e

install_mongo() {
    touch /etc/yum.repos.d/mongodb-org-4.2.repo
    cat  >/etc/yum.repos.d/mongodb-org-4.2.repo <<EOF
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
EOF
    cat /etc/yum.repos.d/mongodb-org-4.2.repo
    yum install -y mongodb-org
    service mongod start
    command -v mongo
}

install_node() {
    yum install -y gcc-c++ make
    curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
    yum install -y nodejs
    command -v node
}

install_pm2() {
    npm install -g pm2
    command -v pm2
}

install_nginx_certbox() {
    amazon-linux-extras install nginx
    command -v nginx
    amazon-linux-extras install epel
    yum install certbot python-certbot-nginx
    command -v certbot
    # certbot --nginx
}

sudo su -
install_mongo
install_node
install_pm2

