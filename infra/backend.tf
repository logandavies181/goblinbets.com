terraform {
  backend "s3" {
    bucket = "goblinbets.com.state"
    region = "ap-southeast-2"
  }
}

provider "aws" {
  region = "ap-southeast-2"
}
