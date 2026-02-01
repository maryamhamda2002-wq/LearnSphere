Here’s a concise **README.md** you can use for your LearnSphere GitHub repo:

```markdown
# LearnSphere | English Learning Modules & Quiz

LearnSphere is a web app for learning **English tenses, modals, grammar, and vocabulary** with detailed **modules** and **interactive quizzes**.

## Features
- **Tenses:** Present, Past, Future  
- **Modals:** Should, Would, Could, May, Might, Can  
- **Non-Finites:** Infinitives, Gerunds, Participles  
- **Parts of Speech, Clauses, Sentence Structures**  
- **Active / Passive Voice**  
- **Important Spelling & Dictionary (English-Urdu)**  
- **Interactive Quizzes**  

## Folder Structure
```

LearnSphere/
│
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ data/
├─ present.json
├─ past.json
├─ future.json
├─ modals.json
└─ maymightcan.json

````

## How to Use
1. Clone the repo:  
   `git clone https://github.com/your-username/LearnSphere.git`  
2. Open `index.html` in a browser  
3. Click modules to view descriptions  
4. Select a module in the Quiz section and start  

## JSON Quiz Format
```json
{
  "questions": [
    {
      "question": "She ___ (read) a book yesterday.",
      "options": ["reads", "read", "is reading", "has read"],
      "answer": 1
    }
  ]
}
````

* `question` → Quiz question
* `options` → Answer choices
* `answer` → Correct option index (0-based)

## Tech

* HTML, CSS, JS, JSON, Feather Icons

## License

Free for educational use.

```

You can save this as `README.md` in your repo root. It clearly explains modules, quizzes, folder structure, and usage.
```
