FILES=$(find . -name "*.css")

for file in $FILES; do
    mv -- "$file" "${file%.css}.scss"; done