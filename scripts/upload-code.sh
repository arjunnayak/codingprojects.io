# !/bin/bash
set -e

yarn run build

PROJECT_DIR=$(pwd)
rsync -av --progress -e "ssh -i ${EC2_PEM}" \
--exclude='node_modules/' --exclude='src/' --exclude='scripts/' \
  $PROJECT_DIR/* \
  ec2-user@$EC2_SSH_URL:/home/ec2-user/app
