from flask import Flask

def create_app(test_config=None):
    """
    Create and configure the app
    """

    app = Flask(__name__, instance_relative_config=True)

    @app.route("/")
    def index():
        return "Monkey Brainz"

    @app.route("/wait-time/<store_id>", methods=["GET"])
    def wait_time(store_id):
        return {
            store_id: {
                "store_id": store_id,
                "wait_time": 10
            }
        }
    return app
