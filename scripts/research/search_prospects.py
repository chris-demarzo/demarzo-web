from urllib.request import Request,urlopen
from urllib.parse import quote
from xml.etree import ElementTree as ET
names=['VERANDA PAINTING PRO','GOLDPHASE PAINTING LLC','DC PAINTING SOLUTIONS INC','NOTCH PAINTING & HANDYMAN SERVICES LLC','APEX PAINTING SOLUITONS CORP',"KING'S ISLE PAINTERS",'CORNISH PAINTING AND PRESSURE WASHING SERVICES LLC','LUX SURFACE & PAINT CO LLC']
for n in names:
    url='https://www.bing.com/search?format=rss&q='+quote(n+' Port St Lucie Florida painting')
    try:
        raw=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=30).read()
        root=ET.fromstring(raw)
    except Exception as e:
        print('\n###',n,'ERR',e); continue
    print('\n###',n)
    for item in root.findall('.//item')[:10]:
        print(item.findtext('title'),'|',item.findtext('link'),'|',item.findtext('description'))
