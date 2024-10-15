from flask import Flask, request, jsonify
from googletrans import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

translator = Translator()

@app.route('/translate', methods=['GET'])
def translate():
    source = request.args.get('source')
    target = request.args.get('target')
    text = request.args.get('text')

    if not source or not target or not text:
        return jsonify({'error': 'Missing parameters'}), 400

    try:
        translation = translator.translate(text, src=source, dest=target)

        return jsonify({'translation': translation.text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
