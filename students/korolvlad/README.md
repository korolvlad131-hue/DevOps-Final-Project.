# DevOps Status Dashboard

## Project Description
A Node.js web application that displays server status, uptime, and timestamp.

## Technologies
- Node.js 22
- Docker and Docker Hub
- GitHub Actions
- Terraform
- AWS EC2

## Local Run
From the `students/korolvlad` directory:

```bash
npm test
npm start
```

Open: http://localhost:3000

## Docker
```bash
docker build -t devops-status-dashboard .
docker run -d -p 3000:3000 devops-status-dashboard
```

Docker Hub: https://hub.docker.com/r/korolvlad/devops-status-dashboard

## CI/CD Pipeline
GitHub Actions runs automatically on every push to `main`:

1. Tests the Node.js application.
2. Builds and verifies the Docker container.
3. Pushes the image to Docker Hub.

Required GitHub Secrets: `DOCKER_USERNAME`, `DOCKER_TOKEN`.

## AWS Deployment
Terraform creates an Ubuntu EC2 instance and a Security Group allowing TCP port `3000`.

Region: `eu-north-1` (Stockholm).

```bash
cd terraform
terraform init
terraform validate
terraform plan
terraform apply
```

EC2 automatically installs Docker and starts the published container during initial provisioning.

**Application:** http://51.20.103.35:3000

**API:** `GET /api/status` — verified with HTTP `200 OK`.

## Deployment Status
- GitHub Actions build and Docker Hub publication: successful.
- Terraform infrastructure provisioning: successful.
- Docker application on AWS EC2: running.
- Automatic redeployment after subsequent pushes: not yet configured.

## Author
korolvlad
