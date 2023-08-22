echo "Switching to master branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to the server..."
sudo scp -i mykey.pem -r build/* ec2-user@16.16.186.90:/var/www/16.16.186.90/

echo "Done!"