import requests

headers = {
         'content-type': 'application/x-www-form-urlencoded',
         'nep-organization': '3feaeb2481a64df9b1953945990c7eae',
         'date': "2020-10-17T15:38:41.769Z"
        }
lat = 33.7767488
lon = -84.3984255
url = 'https://gateway-staging.ncrcloud.com/site/sites/find-nearby/%f,%f?radius=1000'%(lat, lon)
resp = requests.get(url, headers=headers, auth=('c1550d69-8a76-43ad-b0cf-1b3b06cc6546', '@8askate'))
ids = [d['id'] for d in resp.json()['sites']]
adds = [d['address'] for d in resp.json()['sites']]

print(ids)
print(adds)
