#!/bin/bash

# Define the blog directory
BLOG_DIR="./src/blog"
OUTPUT_FILE="$BLOG_DIR/posts.tsx"

# Start generating the posts.tsx file
echo "// Auto-generated file. Do not edit manually." > $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

# Loop through all .md files in the blog directory
IMPORTS=""
EXPORTS="export const blog_posts = ["

for FILE in $BLOG_DIR/*.md; do
  BASENAME=$(basename "$FILE" .md)
  IMPORT_NAME="blog_${BASENAME//[^a-zA-Z0-9_]/_}"
  IMPORTS+="import $IMPORT_NAME from './$(basename "$FILE")';\n"
  EXPORTS+="\n  $IMPORT_NAME,"
done

# Finalize the exports
EXPORTS+="\n];"

# Write imports and exports to the output file
echo -e "$IMPORTS" >> $OUTPUT_FILE
echo -e "$EXPORTS" >> $OUTPUT_FILE

# Notify the user
echo "Generated $OUTPUT_FILE with all Markdown files in $BLOG_DIR."