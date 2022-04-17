from flask import Flask, redirect, url_for, render_template
import acc


app = Flask(__name__)
print(acc.location)
coords = acc.location.split(',')
latitude = coords[0]
longitude = coords[1]

@app.route("/")
def home():
  data = acc.location
  return render_template("index.html", latitude=latitude, longitude=longitude, numEmployees=acc.numEmployees)

@app.route('/') #TALKJ TO CHRIS ABOUT THIS THIS BRINGS IN THE COORDS I THINK
def coord():
    # data = location
    return render_template('index.html', data=data)

if __name__ == "__main__":
  app.run()

