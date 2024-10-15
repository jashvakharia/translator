# Material You Real-Time Translator

A simple and dynamic web application for real-time language translation using the `googletrans` library. This application allows users to translate text from one language to another as they type, featuring a clean and modern Material You design.

## Features

- Translate text from any supported language to another.
- Real-time translation with instant feedback as you type.
- User-friendly interface with rounded corners and smooth animations.
- No API key required thanks to the use of the `googletrans` library.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **Translation**: `googletrans` library

## Folder Structure

```plaintext
/translator
│
├── /css
│   └── styles.css        
│
├── /js
│   └── app.js            
│
├── /server
│   └── app.py            
│
└── index.html            
│
└── requirements.txt     
````
## Run

Clone the project

```bash
  git clone https://github.com/jashvakharia/translator
```

Go to the project directory

```bash
  cd translator
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server

```bash
  python3 server/app.py
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

