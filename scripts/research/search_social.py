from urllib.request import Request,urlopen
from urllib.parse import quote
from xml.etree import ElementTree as ET
names=['VERANDA PAINTING PRO','GOLDPHASE PAINTING LLC','DC PAINTING SOLUTIONS INC','NOTCH PAINTING & HANDYMAN SERVICES LLC','APEX PAINTING SOLUITONS CORP',"KING'S ISLE PAINTERS",'CORNISH PAINTING AND PRESSURE WASHING SERVICES LLC','LUX SURFACE & PAINT CO LLC']
for n in names:
  for site in ['facebook.com','instagram.com','sunbiz.org']:
    q='"'+n+'" site:'+site
    try:
      raw=urlopen(Request('https://www.bing.com/search?format=rss&q='+quote(q),headers={'User-Agent':'Mozilla/5.0'}),timeout=30).read(); root=ET.fromstring(raw)
    except Exception as e: print('ERR',q,e); continue
    items=root.findall('.//item')[:3]
    print('\n###',n,site)
    for i in items: print(i.findtext('title'),'|',i.findtext('link'),'|',i.findtext('description'))
