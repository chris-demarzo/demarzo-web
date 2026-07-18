from urllib.request import Request,urlopen
from urllib.parse import quote
import json
names=['VERANDA PAINTING PRO','GOLDPHASE PAINTING LLC','DC PAINTING SOLUTIONS INC','NOTCH PAINTING & HANDYMAN SERVICES LLC','APEX PAINTING SOLUITONS CORP',"KING'S ISLE PAINTERS",'CORNISH PAINTING AND PRESSURE WASHING SERVICES LLC','LUX SURFACE & PAINT CO LLC']
for n in names:
 try:
  u='https://api.opencorporates.com/v0.4/companies/search?q='+quote(n)+'&jurisdiction_code=us_fl'
  d=json.loads(urlopen(Request(u,headers={'User-Agent':'Mozilla/5.0'}),timeout=30).read())
  print('\n###',n)
  for x in d['results']['companies'][:5]:
   c=x['company']; print(c.get('name'),'|',c.get('company_number'),'|',c.get('current_status'),'|',c.get('incorporation_date'),'|',c.get('opencorporates_url'))
 except Exception as e: print('\n###',n,'ERR',e)
