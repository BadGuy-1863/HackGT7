from flask import Flask
from flask import request
import pyodbc
import requests
import datetime
from apscheduler.schedulers.background import BackgroundScheduler



def create_app(test_config=None):
    """
    Create and configure the app
    """


    def get_id_near(lat,lon, rad):
        headers = {
         'content-type': 'application/x-www-form-urlencoded',
         'nep-organization': '3feaeb2481a64df9b1953945990c7eae',
         'date': "2020-10-17T15:38:41.769Z"
        }
        url = 'https://gateway-staging.ncrcloud.com/site/sites/find-nearby/%f,%f?radius=%d'%(float(lat), float(lon), int(rad)*5280)
        resp = requests.get(url, headers=headers, auth=('c1550d69-8a76-43ad-b0cf-1b3b06cc6546', '@8askate'))
        ids = [d['id'] for d in resp.json()['sites']]
        adds = [d['address'] for d in resp.json()['sites']]
        coords = [d['coordinates'] for d in resp.json()['sites']]
        return ids, adds, coords

    def get_time(store_id):

        server = 'tcp:sqlserverhackgt72020.database.windows.net'
        database = 'QueueData'
        username = 'azureuser'
        password = 'Hackgt72020'
        driver= '{SQL Server Native Client 11.0}'
        with pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password) as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT QueueTime FROM Merchant WHERE Merchant_ID = '%s';"%str(store_id))
                row = cursor.fetchone()
                return(str(row[0]))

    def get_num_in_progress(store_id):
        headers = {
         'content-type': 'application/json',
         'nep-organization': '3feaeb2481a64df9b1953945990c7eae',
         'nep-enterprise-unit': store_id,
         'date': "2020-10-17T15:38:41.769Z"
        }
        payload = "{\n    \"searchCriteria\": {\n       \"status\": \"InProgress\"\n    },\n    \"operator\": \"AND\",\n    \"pageStart\": 0,\n    \"pageSize\": 100\n}"
        url = 'https://gateway-staging.ncrcloud.com/order/orders/find'
        resp = requests.request("POST",url, headers=headers, auth=('c1550d69-8a76-43ad-b0cf-1b3b06cc6546', '@8askate'), data = payload)
        return resp.json()["totalResults"]
    app = Flask(__name__, instance_relative_config=True)

    means = {}
    def init_means(store_id):
        headers = {
         'content-type': 'application/json',
         'nep-organization': '3feaeb2481a64df9b1953945990c7eae',
         'nep-enterprise-unit': store_id,
         'date': "2020-10-17T15:38:41.769Z"
        }
        payload = "{\n    \"searchCriteria\": {\n       \"status\": \"Finished\"\n, \"enterpriseUnitID\": \"%s\"\n     },\n    \"operator\": \"AND\",\n    \"pageStart\": 0,\n    \"pageSize\": 100\n}"%str(store_id)
        url = 'https://gateway-staging.ncrcloud.com/order/orders/find'
        resp = requests.request("POST",url, headers=headers, auth=('c1550d69-8a76-43ad-b0cf-1b3b06cc6546', '@8askate'), data = payload)
        means[str(store_id)] = 5

    def update_time(store_id):
        return str(datetime.timedelta(seconds = get_num_in_progress(store_id)*208))

    def update_db():
        server = 'tcp:sqlserverhackgt72020.database.windows.net'
        database = 'QueueData'
        username = 'azureuser'
        password = 'Hackgt72020'
        driver= '{SQL Server Native Client 11.0}'
        with pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password) as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT DISTINCT Merchant_ID FROM Merchant");
                ids = cursor.fetchall()
                for sid in ids:
                    store_id = sid[0]
                    print(store_id)
                    cursor.execute("UPDATE Merchant SET QueueTime = '%s' WHERE Merchant_ID = '%s';"%(update_time(store_id), store_id))

    sched = BackgroundScheduler(daemon=True)
    sched.add_job(update_db,'interval',minutes=5)
    sched.start()

    def wait_time(store_id, add, coord):
        return {
                "store_id": store_id,
                "wait_time": get_time(store_id),
                "address": add,
                "coordinates":coord
        }
    @app.route("/")
    def index():
        return "Monkey Brainz"



    @app.route("/times", methods=["GET"])
    def times():
        lat = request.args.get('lat')
        lon = request.args.get('lon')
        rad = request.args.get('rad')
        ids, adds, coords = get_id_near(lat, lon, rad)
        ret = []
        for k in range(len(ids)):
            ret.append(wait_time(ids[k], adds[k], coords[k]))
        return {'times':ret}

    return app
