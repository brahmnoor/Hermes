Backend set up in FastAPI.

-- Set up Env in PowerShell
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\brahm\Documents\Hermes\Hermes\backend\key.json"


-- Run FastAPI
 uvicorn main:app --reload