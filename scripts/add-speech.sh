#!/bin/bash

echo "Let's a new speech..."
echo " "

function join_by { local IFS="$1"; shift; echo "$*"; }

read -p "speaker: (Ken Burns) " speaker
speaker=${speaker:-Ken Burns}
lowercasespeaker=`echo "$speaker" | awk '{print tolower($0)}'`
read -p "year: (2006) " year
year=${year:-2006}
read -p "school: (Georgetown University) " school
school=${school:-Georgetown University}
lowercaseschool=`echo "$school" | awk '{print tolower($0)}'`
fullPath=`join_by - $year $lowercasespeaker $lowercaseschool`
read -p "youtube_id: (D1R-jKKp3NA) " youtube_id
youtube_id=${youtube_id:-D1R-jKKp3NA}

echo " "
echo "Thanks, here's what we've got:"
echo " "

echo "speaker: $speaker"
echo "school: $school"
echo "year: $year"
echo "youtube_id: $youtube_id"
echo "path: $fullPath"

echo " "

if [ "$isMarkdown" == "true" ]; then
echo "Creating a new speech page based on your input..."
mkdir "src/pages/${fullPath}"
echo "---
path: \"${fullPath}\"
speaker: \"${speaker}\"
school: \"${school}\"
year: \"${year}\"
youtube_id: \"${youtube_id}\"
---

Hello, graduates! Get ready for the best speech, ever.

    " >> src/pages/${fullPath}/index.md
fi

echo " "
echo "Done!"
echo " "
echo "Let's start the blog dev server..."
# yarn develop