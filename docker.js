
command ="docker run -e SERVER_NAME=':80' -e MERCURE_PUBLISHER_JWT_KEY='drawapp' -e MERCURE_SUBSCRIBER_JWT_KEY='drawapp' -e MERCURE_EXTRA_DIRECTIVES='cors_origins http://localhost:3000' -p 80:80 dunglas/mercure"
const { execSync } = require('child_process');
const output = execSync('bash docker.sh', { encoding: 'utf-8' });