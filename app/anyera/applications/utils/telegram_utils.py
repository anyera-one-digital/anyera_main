import os
import requests


env = os.environ

def send_telegram_message(message, html=False, file=None):
    telegram_token = env.get("TELEGRAM_TOKEN")
    chat_id = env.get("TELEGRAM_CHANNEL_ID")

    if file:
        telegram_api_url = f'https://api.telegram.org/bot{telegram_token}/sendDocument'
        payload = {
            'chat_id': chat_id,
            'caption': message,
            'parse_mode': 'HTML' if html else 'Markdown'
        }
        files = {
            'document': (file.name, file.read())
        }
        response = requests.post(telegram_api_url, data=payload, files=files)
    else:
        telegram_api_url = f'https://api.telegram.org/bot{telegram_token}/sendMessage'
        payload = {
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML' if html else 'Markdown'
        }
        response = requests.post(telegram_api_url, data=payload)

    if response.status_code != 200:
        print(f"Ошибка отправки сообщения: {response.status_code}, {response.text}")
    
    return response