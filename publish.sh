rm -rf dist
./node_modules/.bin/webpack

base_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

git stash
git checkout gh-pages || git checkout -b gh-pages
git merge master
git pull origin gh-pages
cp -r $base_dir/dist/* $base_dir/
git add -A
git commit -m "publishing"
git push -u origin gh-pages
git checkout master
git stash pop