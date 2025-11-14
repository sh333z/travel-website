from flask import Flask, request, jsonify, send_from_directory
from datetime import datetime
import csv, os

app = Flask(__name__, static_folder='.')

DATA_DIR = 'data'
os.makedirs(DATA_DIR, exist_ok=True)
CONTACT_CSV = os.path.join(DATA_DIR, 'contacts.csv')

def append_csv(path, row, headers):
    exists = os.path.exists(path)
    with open(path, 'a', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        if not exists:
            writer.writeheader()
        writer.writerow(row)

@app.route('/api/contact', methods=['POST'])
def contact():
    name = request.form.get('name', '').strip()
    email = request.form.get('email', '').strip()
    phone = request.form.get('phone', '').strip()
    package = request.form.get('package', '').strip()
    message = request.form.get('message', '').strip()

    if not name or not email:
        return "Name and email are required", 400

    row = {
        'timestamp': datetime.utcnow().isoformat(),
        'name': name,
        'email': email,
        'phone': phone,
        'package': package,
        'message': message
    }
    headers = ['timestamp','name','email','phone','package','message']
    append_csv(CONTACT_CSV, row, headers)

    # Optionally: send email via SMTP or external service here
    return jsonify({'status':'ok','message':'Saved'}), 200

# Serve static index for local dev
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)