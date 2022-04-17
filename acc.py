import requests, json

# generate random integer values
from random import seed
from random import randint

#person serach

# # API code 
API_KEY = '6e45d69f56b67d2ada4b27e2e3a497fc9b435a902a43ec6a6364a2c73eb158b3'
# # linked in url 
LINKEDIN_URL = "https://www.linkedin.com/in/hiranya-kamdar/"

pdl_url = "https://api.peopledatalabs.com/v5/person/enrich"

params = {
    "api_key": '6e45d69f56b67d2ada4b27e2e3a497fc9b435a902a43ec6a6364a2c73eb158b3',
    "profile": [LINKEDIN_URL],
    "min_likelihood": 6
}

json_response = requests.get(pdl_url,  params=params).json()

if json_response["status"] == 200:
  record = json_response['data']

  for i in range(0,len(record['education'])):
    print(record['education'][i]['school']['name'])

  curr_occupation = record['job_company_name']
  if record['job_company_website'] == "":
    print("njada")
  else:
    curr_occupation_web = "https://" + record['job_company_website']
    #company search

    url = "https://api.peopledatalabs.com/v5/company/enrich"
    querystring = {"website":curr_occupation_web}
    print(curr_occupation_web)

    headers = {
        'accept': "application/json",
        'content-type': "application/json",
        'x-api-key': API_KEY
        }

    response = requests.request("get", url, headers= headers, params=querystring)
    #response = requests.get(url, params = querystring)
    print(response.json()['employee_count'])

  location = record['location_geo']
  location_name = record['location_name'] 
  print(location, curr_occupation, location_name)


  # Save enrichment data to json file
  with open("my_pdl_enrichment.jsonl", "w") as out:
    out.write(json.dumps(record) + "\n")
else:
  print("Enrichment unsuccessful. See error and try again.")
  print("error:", json_response)

seed(1)

numEmployees = response.json()['employee_count']

if numEmployees < 30:
  score = 70 + randint(0,30)
elif numEmployees < 100:
  score = 40 + randint(0,30)
else:
  score = randint(0,70)

# rating = whatever chris gets

