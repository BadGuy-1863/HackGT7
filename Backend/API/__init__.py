from flask import Flask
import requests

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
    url = 'https://gateway-staging.ncrcloud.com/site/sites/find-nearby/%f,%f?radius=%d'%(lat, lon, rad)
    resp = requests.get(url, headers=headers, auth=('c1550d69-8a76-43ad-b0cf-1b3b06cc6546', '@8askate'))
    ids = [d['id'] for d in resp.json()['sites']]
    adds = [d['address'] for d in resp.json()['sites']]
    return ids, adds

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

    @app.route("/")
    def index():
        return "Monkey Brainz"

    @app.route("/wait-time/<store_id>", methods=["GET"])
    def wait_time(store_id):
        return {
            store_id: {
                "store_id": store_id,
                "wait_time": 5*get_num_in_progress(store_id)
            }
        }
    return app
