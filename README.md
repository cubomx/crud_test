
## About this repo
This project was made in order to learn about PHP and more properly, Laravel.

All 

## Run the project
To execute this little whole system I suggest the following:

Having the environment variables file configured something like the next:
``` 
APP_NAME=<appName>
APP_ENV=local
APP_KEY=<appKey>
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<dbName>
DB_USERNAME=<adminName>
DB_PASSWORD=<password>

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

To start the backend, run the following (if you have installed PHP and included in the PATH):
### `php artisan serve`

To keep track of any changes that you may have on the React app (if you desire to do so),
please in a different terminal type the following command:
### `npm run watch`

## License

```

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
