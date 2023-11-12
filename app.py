import openai
import geocoder
import requests
import random
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
from flask import Flask, jsonify, request, Response
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


# Set your OpenAI API key here
openai.api_key = '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'
destination = ""
my_location = 'Model Enineering College'
current_item = ""
api_key = "AuraIYPJFNPL0OUQt4GLJmwA3Leu2Mg58bGR6a5EVqW78_Q8khxNytmx3rsYnHvj"

indian_airports = [
    {"location": "Delhi", "code": "DEL"},
    {"location": "Mumbai", "code": "BOM"},
    {"location": "Chennai", "code": "MAA"},
    {"location": "Kolkata", "code": "CCU"},
    {"location": "Bangalore", "code": "BLR"},
    {"location": "Hyderabad", "code": "HYD"},
    {"location":"Kochi","code":"COK"}
]
metro_cities_railway_stations = [
    {"location":"Delhi","code": "NZM"},
    {"location":"Mumbai","code": "CST"},
    {"location":"Kolkata","code": "HWH"},
    {"location":"Chennai","code": "MAS"},
    {"location":"Bengaluru","code": "SBC"},
    {"location":"Hyderabad","code": "SC"}
]


def chat_with_gpt3(user_input):
    global destination
    # Set the model name. You can experiment with different models provided by OpenAI.
    model = "text-davinci-003"

    # Generate a response from GPT-3
    response = openai.Completion.create(
        engine=model,
        prompt=user_input,
        max_tokens=150  # You can adjust the length of the response
    )

    # Extract and print the generated response
    chatbot_response = response['choices'][0]['text']
    destination = chatbot_response.strip('\n')
    print("Destination:", destination)

def get_item(user_input):
    global current_item
    # Set the model name. You can experiment with different models provided by OpenAI.
    model = "text-davinci-003"

    # Generate a response from GPT-3
    response = openai.Completion.create(
        engine=model,
        prompt=user_input,
        max_tokens=150  # You can adjust the length of the response
    )

    # Extract and print the generated response
    chatbot_response = response['choices'][0]['text']
    current_item = chatbot_response.strip('\n')
    print("Current_Item:", current_item)

def find_fooditem(user_input):
    # Set the model name. You can experiment with different models provided by OpenAI.
    model = "text-davinci-003"

    # Generate a response from GPT-3
    response = openai.Completion.create(
        engine=model,
        prompt=user_input,
        max_tokens=150  # You can adjust the length of the response
    )

    # Extract and print the generated response
    chatbot_response = response['choices'][0]['text']
    food_item = chatbot_response.strip('\n')
    print("food item:", food_item)

    return food_item

def find_restname(user_input):
    # Set the model name. You can experiment with different models provided by OpenAI.
    model = "text-davinci-003"

    # Generate a response from GPT-3
    response = openai.Completion.create(
        engine=model,
        prompt=user_input,
        max_tokens=150  # You can adjust the length of the response
    )

    # Extract and print the generated response
    chatbot_response = response['choices'][0]['text']
    food_rest = chatbot_response.strip('\n')
    print("food item:", food_rest)

    return food_rest

def getRespon(user_input):
    # Set the model name. You can experiment with different models provided by OpenAI.
    model = "text-davinci-002"

    # Generate a response from GPT-3
    response = openai.Completion.create(
        engine=model,
        prompt=user_input,
        max_tokens=150  # You can adjust the length of the response
    )

    # Extract and print the generated response
    chatbot_response = response['choices'][0]['text']
    text = chatbot_response
    print("promt:", text)

    return text



# Main loop for user interaction
def get_currentLoc():
    # Using geocoder to get the current location based on IP address
    location = geocoder.ip('me')

    if location.latlng:
        latitude, longitude = location.latlng
        print(f'Current Location - Latitude: {latitude}, Longitude: {longitude}')
        return latitude, longitude
    else:
        print('Unable to determine current location.')
        return None

def find_airport_code(location_name, airports):
    for airport in airports:
        if airport["location"] == location_name:
            return airport["code"]
    return None  # Return None if the location is not found
def find_train_code(location_name, airports):
    for airport in airports:
        if airport["location"] == location_name:
            return airport["code"]
    return None  # Return None if the location is not found
    
    
@app.route('/')
def hello():
    return 'Hello'

@app.route('/chat',methods=['GET','POST'])
def chat():
    if request.method == 'POST':
    # Get data from the POST request
        data = request.json  # Use request.json for JSON data
        message = data.get('data','No data received')
        print(message)
        if message:
            user_input = message
            if user_input.lower() == 'exit':
                print("Goodbye!")

            user_input = '"'+user_input+'" , What is the domain mentioned ? Food , Travel or Expense , select only one'
            get_item(user_input)

            if "travel" in current_item.lower():    
                user_input = '"'+user_input+'" , what is the place mentioned here give it in one word'
                chat_with_gpt3(user_input)
                lat,log = get_currentLoc()
                print(lat,log)
                random_price = random.randint(2000,3000)
                fl_code = find_airport_code(destination, indian_airports)
                rl_code = find_train_code(destination, metro_cities_railway_stations)
                resText = 'give response that you have made necessary arragemnts for my travel and there more plans to save your budget, paraphrase it. '
                text = getRespon(resText)
                hotel=""
                if rl_code =='DEL':
                    hotel = "Ramada Blu Hotel"
                else:
                    hotel = "OYO Super"
                
                processed_data = {"id":0,"srccab":{"price":(random_price/10),"duration":"32min"},"train":{"from":"ERS","to":rl_code,"date":"2023-11-30"},"flight":{"from":"COK","to":fl_code,"date":"2023-11-30"}
                          ,"descab":{"price":(random_price/200+34),"duration":"20min"},"hotel":{"name":hotel,"price":random_price},"response":text,"flag":1}
            
            elif "food" in current_item.lower():
                find_food = '"'+user_input+'" , what is the food dish mentioned ? give it in only one word'
                food_name = find_fooditem(find_food)
                find_rest = '"'+user_input+'" , what is the name of restaurant mentioned here ? give it in only one word'
                rest_name = find_restname(find_rest)
                random_price = random.randint(100, 150)
                resText = 'give response that you found the best deal among the restaurants. and hope you love the food'
                text = getRespon(resText)
                processed_data = {"id":1,"food1":{"title":food_name,"restaurant":rest_name,"price":random_price},"response":text}
            
            else:
                processed_data = {"id":0,"srccab":{"price":(random_price/10),"duration":"32min"},"train":{"from":"ERS","to":rl_code,"date":"2023-11-30"},"flight":{"from":"COK","to":fl_code,"date":"2023-11-30"}
                          ,"descab":{"price":(random_price/200+34),"duration":"20min"},"hotel":{"name":hotel,"price":random_price},"response":text,"flag":0}



    
# Process the data (you can perform any logic here)
        
        
        
    # Return a response
        return jsonify(processed_data)
    
    return 'Get Chat'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)      
