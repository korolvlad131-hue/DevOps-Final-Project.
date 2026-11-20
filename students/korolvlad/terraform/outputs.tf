output "instance_id" {
  description = "ID of the created EC2 instance"
  value       = aws_instance.dashboard.id
}

output "public_ip" {
  description = "Public IP address of EC2"
  value       = aws_instance.dashboard.public_ip
}

output "dashboard_url" {
  description = "URL of the DevOps dashboard"
  value       = "http://${aws_instance.dashboard.public_ip}:3000"
}