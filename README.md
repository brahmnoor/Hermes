Backend set up in FastAPI.

-- Set up Env in PowerShell
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\brahm\Documents\Hermes\Hermes\backend\key.json"


-- Run FastAPI
 uvicorn main:app --reload

-- Environment Variables

{
  "type": "service_account",
  "project_id": "my-project-1540148816815",
  "private_key_id": "2f9184cf2114bd1e757e55e3bd25ae4aa5dadd2f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzXrpclPZsqsA2\n+cAbFDkVBMv6thzuisCZf4roRdXOT0Q5l3ecxV55NRdd5B6p239urgYlShIh5268\nWpdTuxmeJTmv9bpMJzB07jxtjWHZxzbfvEK45Iz403LN6JKjD2jfpzyMI5iJUZQA\n0TgYxV1no9RcdU34wd4wIbifdUhk1HdOFJp421cK+jUHadZPvtqmA4HTXKGTqeRp\nV6787DxsTeR+bY6CHHAu5nGNTYO/PXdrmhh611QRseklF9Q0J1INVZfB9ICbiTmY\nmynYYRjYYXBl5Y1Mcjag6/VNrAa8SAC4pDyMfx/c1DkUUuIV7Ce84EdrfZr6tYKZ\nIjegT46VAgMBAAECggEAANLFhpN65WAC18kvw2AOkSmGS71YwiaMZSEe/m2Wxuae\nULruXRZ2aKipsTAaHzdCrTuz5wTYIK1a9DuXgU01BVw0vWcihr6aTl+rJSAEQsmc\nacNsWfsglc/y8WuEQ+/YEEi/aUse9pYcqulK8E3iL/trbJY408tOBFIKu7oSaWPH\nSNe4zP5Ab+XWKKfFYQVrzyAt76yhPFaiLyYQzP0HNcedg5cP13p26w3eqpsfb+rb\nqfa9drw+W3AeHxX/WFlrOvsMsamcKSg1m6lYoMHNjHZJZcPOPRv9fB92H9VCeOCn\n6q0dXuK60KueEKgToBdKIlFGajTA+4kjUJlbdmalIQKBgQD6Wp047K6MDLIWpoId\nbPC6rZuAXJ2qGK20rC5A+INWZaVmHlepxNJdrRq2vF/m838M4OG3PlAkjjTBrtlc\n4qNPZcopqNFmqRYTIkLfggQthpLHsRJKTEt4yJk4kjM2Gctyh/6qiL583hBSNNMv\nh6F33oE/vlxQ1s6Gez99KW1+dQKBgQC3akwhoWfIxNlo4OtXE2vytKuMBz0dAyps\n5H2R9N9iQOsMIr+qeOM/7bgmu1ierSkOgvXlYCeNJt9dNK0numPRMw2jC2oRPXqd\nMibOs7pr3nwEuQdpu5pOgrDtahZLdR9VOXbglIUbvYIVQz/gH8tkX2Ajn50SVeMp\nM1k9LXQLoQKBgQCAIrbLtuATkD/qNejstKB1e3vWdBDCSYVGrsWxvUBDjRzdqnQF\n0VY2We4NT1bqdwA1EDiWuE7+lsZLx3k7AEjDz35sWhprJ+nDe0qs6PfIcVNY37lT\ny77pIArEGJgbfZJSmWZv1DNi56mE2cKpVgr/tiODA6RuP7NOw3AYWIbRLQKBgEgi\nn0SOxVGZ0ePEqeo6MjdnRRyycB+r8hCXoKc5xm1PGOJR/E2gc8fdx5I8FnN5qO8T\nJICM26FRC4INyJgaX02UpaVdRN747fNLGSYsW4I3I1F8L+UuqlZ8YfdNxOzyaFtN\nWWqkHuG1G6cfJs0P1B9qv1XjXZQrgUbf8hX0fXJhAoGBAOsxRfg/A8k9qoShGcDA\n55JXWotebGdFi2qIS2AJxTqPH65Um5e8VIwH/DI0MAgeBDNnX5K8nfGIKzvZeUPu\nCfO8FRying2DGFJW3A0Y7to5qurgdAYnoYkiXDS+9iClcMfmqOwVR57qM03M/9ID\n6Au1udbumShEIKxvIsX9RJj7\n-----END PRIVATE KEY-----\n",
  "client_email": "starting-account-dx79poijcr@my-project-1540148816815.iam.gserviceaccount.com",
  "client_id": "116438902977092301122",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/starting-account-dx79poijcr%40my-project-1540148816815.iam.gserviceaccount.com"
}