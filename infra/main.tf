module "static-site" {
  source = "./modules/aws-static-site"

  site_domain = "goblinbets.com"
  bucket_name = "goblinbets.com"
  acm_certificate_arn = var.acm_certificate_arn
}
