
// ----------- Module Descriptions (Modal) -----------
const featureCards = document.querySelectorAll(".feature-card");
const modal = document.getElementById("featureModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");
// Full, detailed description for each module
const moduleData = {
  present: `
    <h4>Present Tenses</h4>
    <p>The present tense is used to describe actions happening now, habitual actions, or general truths.</p>
    <ul>
      <li><strong>Simple Present:</strong> Habit or universal truth. Ex: "She reads books every day."</li>
      <li><strong>Present Continuous:</strong> Actions happening right now. Ex: "She is reading a book."</li>
      <li><strong>Present Perfect:</strong> Actions completed recently or affecting present. Ex: "She has read the book."</li>
      <li><strong>Present Perfect Continuous:</strong> Actions continuing until now. Ex: "She has been reading for two hours."</li>
    </ul>
  `,
  past: `
    <h4>Past Tenses</h4>
    <p>Past tense is used to describe actions that were completed or ongoing in the past.</p>
    <ul>
      <li><strong>Simple Past:</strong> Completed actions. Ex: "She read a book yesterday."</li>
      <li><strong>Past Continuous:</strong> Ongoing action in the past. Ex: "She was reading when I called."</li>
      <li><strong>Past Perfect:</strong> Actions completed before another past action. Ex: "She had read the book before class."</li>
      <li><strong>Past Perfect Continuous:</strong> Actions ongoing in past before another action. Ex: "She had been reading for 2 hours before he arrived."</li>
    </ul>
  `,
  future: `
    <h4>Future Tenses</h4>
    <p>Future tense expresses actions that will happen.</p>
    <ul>
      <li><strong>Simple Future:</strong> Ex: "She will read a book tomorrow."</li>
      <li><strong>Future Continuous:</strong> Ex: "She will be reading at 5 PM."</li>
      <li><strong>Future Perfect:</strong> Ex: "She will have read the book by tomorrow."</li>
      <li><strong>Future Perfect Continuous:</strong> Ex: "She will have been reading for 2 hours by 6 PM."</li>
    </ul>
  `,
  modals: `
    <h4>Should / Would / Could</h4>
    <p>Modal verbs are used to express ability, possibility, necessity, or politeness.</p>
    <ul>
      <li><strong>Should:</strong> Advice or recommendation. Ex: "You should study."</li>
      <li><strong>Would:</strong> Polite requests or hypothetical situations. Ex: "I would like some tea."</li>
      <li><strong>Could:</strong> Ability, possibility, or polite requests. Ex: "She could solve it easily."</li>
    </ul>
  `,
  maymightcan: `
    <h4>May / Might / Can</h4>
    <p>These modals show possibility, permission, or ability.</p>
    <ul>
      <li><strong>May:</strong> Permission or formal possibility. Ex: "You may leave now."</li>
      <li><strong>Might:</strong> Slight possibility. Ex: "It might rain today."</li>
      <li><strong>Can:</strong> Ability or informal permission. Ex: "She can swim well."</li>
    </ul>
  `,
  nonfinites: `
    <h4>Non-Finites</h4>
    <p>Non-finite verbs do not show tense and act as nouns, adjectives, or adverbs.</p>
    <ul>
      <li><strong>Infinitives:</strong> "To" + verb. Ex: "To read is enjoyable."</li>
      <li><strong>Gerunds:</strong> Verb + ing as noun. Ex: "Reading improves your mind."</li>
      <li><strong>Participles:</strong> Verb form as adjective. Ex: "The running water."</li>
    </ul>
  `,
  pos: `
    <h4>Parts of Speech</h4>
    <p>Every English word belongs to a part of speech that defines its role.</p>
    <ul>
      <li><strong>Noun:</strong> Name of a person, place, thing. Ex: "Book"</li>
      <li><strong>Pronoun:</strong> Replaces a noun. Ex: "He, She"</li>
      <li><strong>Verb:</strong> Action or state. Ex: "Run, Is"</li>
      <li><strong>Adjective:</strong> Describes a noun. Ex: "Beautiful"</li>
      <li><strong>Adverb:</strong> Describes verb/adjective/adverb. Ex: "Quickly"</li>
      <li><strong>Preposition:</strong> Shows relation. Ex: "On, In"</li>
      <li><strong>Conjunction:</strong> Connects words/clauses. Ex: "And, But"</li>
      <li><strong>Interjection:</strong> Expresses emotion. Ex: "Wow!"</li>
    </ul>
  `,
  clauses: `
    <h4>Clauses</h4>
    <p>Clauses are groups of words with subject and predicate.</p>
    <ul>
      <li><strong>Independent:</strong> Complete thought. Ex: "I read books."</li>
      <li><strong>Dependent:</strong> Cannot stand alone. Ex: "Because I was tired."</li>
      <li><strong>Relative:</strong> Gives extra information. Ex: "The book that I read."</li>
    </ul>
  `,
  sentences: `
    <h4>Sentence Structures</h4>
    <p>Based on clauses, sentences can be simple, compound, complex, or compound-complex.</p>
    <ul>
      <li><strong>Simple:</strong> One independent clause. Ex: "She reads."</li>
      <li><strong>Compound:</strong> Two independent clauses. Ex: "She reads and he writes."</li>
      <li><strong>Complex:</strong> Independent + dependent clause. Ex: "She reads because she likes books."</li>
      <li><strong>Compound-Complex:</strong> Two independent + dependent. Ex: "She reads because she likes books, and he writes novels."</li>
    </ul>
  `,
  
  spelling: `
    <h4>Important Spelling</h4>
    <p>These are commonly misspelled words often asked in exams:</p>
    <ul>
      <li>Accommodate</li>
      <li>Believe</li>
      <li>Definitely</li>
      <li>Necessary</li>
      <li>Occasionally</li>
      <li>Separate</li>
      <li>Government</li>
      <li>Opportunity</li>
      <li>Successful</li>
      <li>Conscience</li>
    </ul>
  `,
   activepassive: `
<h3>Active & Passive Voice</h3>

<p>
Voice shows whether the subject of a sentence performs an action or receives an action.
Active and Passive voice are mainly used to change the focus of a sentence without changing its meaning.
</p>

<hr>

<h4>1. Active Voice</h4>
<p>In Active Voice, the subject performs the action.</p>
<p><strong>Structure:</strong> Subject + Verb + Object</p>
<p><strong>Example:</strong> The teacher teaches the students.</p>

<hr>

<h4>2. Passive Voice</h4>
<p>In Passive Voice, the subject receives the action. The object of the active sentence becomes the subject.</p>
<p><strong>Structure:</strong> Object + helping verb + past participle (V3) + by + subject</p>
<p><strong>Example:</strong> The students are taught by the teacher.</p>

<hr>

<h3>Rules for Changing Active to Passive</h3>
<ul>
  <li>Object of Active → Subject of Passive</li>
  <li>Use helping verb according to tense</li>
  <li>Main verb always changes into <strong>3rd form (V3)</strong></li>
  <li>Subject of Active becomes object after <strong>by</strong></li>
</ul>

<hr>

<h3>Active / Passive in All Tenses</h3>

<h4>✔ Present Simple</h4>
<p><strong>Active:</strong> She writes a letter.</p>
<p><strong>Passive:</strong> A letter is written by her.</p>

<h4>✔ Present Continuous</h4>
<p><strong>Active:</strong> She is writing a letter.</p>
<p><strong>Passive:</strong> A letter is being written by her.</p>

<h4>✔ Present Perfect</h4>
<p><strong>Active:</strong> She has written a letter.</p>
<p><strong>Passive:</strong> A letter has been written by her.</p>

<h4>✔ Past Simple</h4>
<p><strong>Active:</strong> She wrote a letter.</p>
<p><strong>Passive:</strong> A letter was written by her.</p>

<h4>✔ Past Continuous</h4>
<p><strong>Active:</strong> She was writing a letter.</p>
<p><strong>Passive:</strong> A letter was being written by her.</p>

<h4>✔ Past Perfect</h4>
<p><strong>Active:</strong> She had written a letter.</p>
<p><strong>Passive:</strong> A letter had been written by her.</p>

<h4>✔ Future Simple</h4>
<p><strong>Active:</strong> She will write a letter.</p>
<p><strong>Passive:</strong> A letter will be written by her.</p>

<hr>

<h3>Important Exam Notes</h3>
<ul>
  <li>Only transitive verbs can be changed into Passive</li>
  <li>Intransitive verbs have no passive form</li>
  <li>Helping verbs must match the tense correctly</li>
  <li>"By whom" is used in questions</li>
</ul>

<p><strong>Example (Question form):</strong><br>
Who wrote this letter?<br>
→ By whom was this letter written?
</p>
`
,
  dictionary: `
    <h4>Dictionary / Vocabulary</h4>
  <p>Important English words commonly used in exams, essays, comprehension passages, and daily English, with Urdu meanings.</p>
  <ul>
    <li><strong>Beautiful:</strong> خوبصورت</li>
    <li><strong>Knowledge:</strong> علم</li>
    <li><strong>Learn:</strong> سیکھنا</li>
    <li><strong>Opportunity:</strong> موقع</li>
    <li><strong>Success:</strong> کامیابی</li>
    <li><strong>Failure:</strong> ناکامی</li>
    <li><strong>Effort:</strong> کوشش</li>
    <li><strong>Encourage:</strong> حوصلہ دینا</li>
    <li><strong>Challenge:</strong> چیلنج / مشکل</li>
    <li><strong>Improve:</strong> بہتر بنانا</li>
    <li><strong>Develop:</strong> ترقی دینا</li>
    <li><strong>Education:</strong> تعلیم</li>
    <li><strong>Experience:</strong> تجربہ</li>
    <li><strong>Confidence:</strong> اعتماد</li>
    <li><strong>Ability:</strong> صلاحیت</li>
    <li><strong>Decision:</strong> فیصلہ</li>
    <li><strong>Purpose:</strong> مقصد</li>
    <li><strong>Support:</strong> تعاون / سہارا</li>
    <li><strong>Responsibility:</strong> ذمہ داری</li>
    <li><strong>Respect:</strong> عزت</li>
    <li><strong>Importance:</strong> اہمیت</li>
    <li><strong>Difference:</strong> فرق</li>
    <li><strong>Situation:</strong> صورتحال</li>
    <li><strong>Solution:</strong> حل</li>
    <li><strong>Problem:</strong> مسئلہ</li>
    <li><strong>Result:</strong> نتیجہ</li>
    <li><strong>Progress:</strong> ترقی</li>
    <li><strong>Increase:</strong> اضافہ کرنا</li>
    <li><strong>Decrease:</strong> کم کرنا</li>
    <li><strong>Achieve:</strong> حاصل کرنا</li>
    <li><strong>Possibility:</strong> امکان</li>
    <li><strong>Necessary:</strong> ضروری</li>
    <li><strong>Correct:</strong> درست</li>
    <li><strong>Mistake:</strong> غلطی</li>
    <li><strong>Honest:</strong> ایماندار</li>
    <li><strong>Brave:</strong> بہادر</li>
    <li><strong>Hardworking:</strong> محنتی</li>
    <li><strong>Successful:</strong> کامیاب</li>
    <li><strong>Failure:</strong> ناکامی</li>
    <li><strong>Guide:</strong> رہنمائی کرنا</li>
    <li><strong>Explain:</strong> وضاحت کرنا</li>
    <li><strong>Accurate:</strong> درست / صحیح</li>
    <li><strong>Argument:</strong> بحث / دلیل</li>
    <li><strong>Attempt:</strong> کوشش کرنا</li>
    <li><strong>Behavior:</strong> رویہ</li>
    <li><strong>Benefit:</strong> فائدہ</li>
    <li><strong>Cause:</strong> وجہ</li>
    <li><strong>Effect:</strong> اثر / نتیجہ</li>
    <li><strong>Condition:</strong> حالت / شرط</li>
    <li><strong>Consider:</strong> غور کرنا</li>
    <li><strong>Contain:</strong> پر مشتمل ہونا</li>
    <li><strong>Ability:</strong> صلاحیت</li>
    <li><strong>Accept:</strong> قبول کرنا</li>
    <li><strong>Achieve:</strong> حاصل کرنا</li>
    <li><strong>Activity:</strong> سرگرمی</li>
    <li><strong>Advantage:</strong> فائدہ</li>
    <li><strong>Advice:</strong> مشورہ</li>
    <li><strong>Allow:</strong> اجازت دینا</li>
    <li><strong>Approach:</strong> طریقہ / نزدیک آنا</li>
    <li><strong>Arrange:</strong> ترتیب دینا</li>
    <li><strong>Attention:</strong> توجہ</li>
    <li><strong>Avoid:</strong> بچنا</li>
    <li><strong>Background:</strong> پس منظر</li>
    <li><strong>Balance:</strong> توازن</li>
    <li><strong>Challenge:</strong> چیلنج / مشکل</li>
    <li><strong>Chance:</strong> موقع</li>
    <li><strong>Compare:</strong> موازنہ کرنا</li>
    <li><strong>Complete:</strong> مکمل کرنا</li>
    <li><strong>Confidence:</strong> اعتماد</li>
    <li><strong>Conflict:</strong> تصادم / اختلاف</li>
    <li><strong>Control:</strong> کنٹرول / قابو</li>
    <li><strong>Decision:</strong> فیصلہ</li>
    <li><strong>Develop:</strong> ترقی دینا</li>
    <li><strong>Difference:</strong> فرق</li>
    <li><strong>Direct:</strong> سیدھا / رہنمائی کرنا</li>
    <li><strong>Encourage:</strong> حوصلہ افزائی کرنا</li>
    <li><strong>Essential:</strong> ضروری</li>
    <li><strong>Experience:</strong> تجربہ</li>
    <li><strong>Failure:</strong> ناکامی</li>
    <li><strong>Focus:</strong> توجہ مرکوز کرنا</li>
    <li><strong>Goal:</strong> مقصد</li>
    <li><strong>Improve:</strong> بہتر بنانا</li>
    <li><strong>Increase:</strong> بڑھانا</li>
    <li><strong>Knowledge:</strong> علم</li>
    <li><strong>Limit:</strong> حد</li>
    <li><strong>Opportunity:</strong> موقع</li>
    <li><strong>Process:</strong> عمل</li>
    <li><strong>Result:</strong> نتیجہ</li>
    <li><strong>Support:</strong> حمایت</li>
    <li><strong>Success:</strong> کامیابی</li>
    <li><strong>Accident:</strong> حادثہ</li>
    <li><strong>Benefit:</strong> فائدہ</li>
    <li><strong>Cause:</strong> وجہ</li>
    <li><strong>Condition:</strong> حالت / شرط</li>
    <li><strong>Connect:</strong> جوڑنا</li>
    <li><strong>Create:</strong> بنانا</li>
    <li><strong>Damage:</strong> نقصان</li>
    <li><strong>Danger:</strong> خطرہ</li>
    <li><strong>Demand:</strong> مطالبہ</li>
    <li><strong>Effort:</strong> کوشش</li>
    <li><strong>Environment:</strong> ماحول</li>
    <li><strong>Explain:</strong> وضاحت کرنا</li>
    <li><strong>Fact:</strong> حقیقت</li>
    <li><strong>Fear:</strong> خوف</li>
    <li><strong>Habit:</strong> عادت</li>
    <li><strong>Honest:</strong> ایماندار</li>
    <li><strong>Idea:</strong> خیال</li>
    <li><strong>Issue:</strong> مسئلہ</li>
    <li><strong>Purpose:</strong> مقصد</li>
    <li><strong>Solution:</strong> حل</li>
    <li><strong>Task:</strong> کام</li>
    <li><strong>Create:</strong> تخلیق کرنا</li>
    <li><strong>Demand:</strong> مطالبہ</li>
  </ul>

 `
 };


// Open modal on card click
featureCards.forEach(card => {
  card.addEventListener("click", () => {
    const feature = card.dataset.feature;
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalBody.innerHTML = moduleData[feature] || "<p>Content not available</p>"; // <- key fix
    modal.style.display = "block";
  });
});

// Close modal
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if(event.target === modal) modal.style.display = "none"; }

// --- QUIZ MODULE (unchanged, only for tenses/modals) ---
let quizData = [];
let currentQ = 0;
let score = 0;
let timer;
let timeLeft = 60;

const tenseSelect = document.getElementById("tenseSelect");
const startBtn = document.getElementById("startQuizBtn");
const quizContainer = document.getElementById("quizContainer");
const questionArea = document.getElementById("questionArea");
const optionsArea = document.getElementById("optionsArea");
const nextBtn = document.getElementById("nextBtn");
const wrongCorrectArea = document.getElementById("wrongCorrectArea");
const scoreArea = document.getElementById("scoreArea");
const timerArea = document.getElementById("timerArea");
const submitBtn = document.getElementById("submitBtn");

startBtn.addEventListener("click", () => {
  const tense = tenseSelect.value;
  fetch(`data/${tense}.json`)
    .then(res => res.json())
    .then(data => {
      quizData = data.questions || data; 
      currentQ = 0; score = 0;
      quizContainer.style.display = "block";
      nextBtn.style.display = "none";
      submitBtn.style.display = "none";
      wrongCorrectArea.textContent = "";
      scoreArea.textContent = "";
      showQuestion();
    }).catch(err => {
      alert("Error loading quiz. Make sure JSON file exists in the data folder.");
      console.log(err);
    });
});

function startTimer() {
  clearInterval(timer);
  timeLeft = 60;
  timerArea.textContent = `Time Left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerArea.textContent = `Time Left: ${timeLeft}s`;
    if(timeLeft <= 0){
      clearInterval(timer);
      nextBtn.style.display = "inline-block";
      Array.from(document.querySelectorAll(".optionBtn")).forEach(b => b.disabled = true);
      wrongCorrectArea.textContent = "Time up! Moving to next question.";
    }
  }, 1000);
}

function showQuestion() {
  if(currentQ >= quizData.length){ showScore(); return; }
  const q = quizData[currentQ];
  questionArea.innerHTML = `<strong>Q${currentQ+1}:</strong> ${q.question}`;
  optionsArea.innerHTML = "";
  wrongCorrectArea.textContent = "";
  nextBtn.style.display = "none";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("optionBtn");
    btn.addEventListener("click", () => {
      clearInterval(timer);
      checkAnswer(opt);
    });
    optionsArea.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(selected){
  const q = quizData[currentQ];
  if(selected === q.answer){
    score++;
    wrongCorrectArea.textContent = "Correct!";
    wrongCorrectArea.style.color = "green";
  } else {
    wrongCorrectArea.textContent = `Wrong! Correct: ${q.answer}`;
    wrongCorrectArea.style.color = "red";
  }
  currentQ++;
  nextBtn.style.display = "inline-block";
  Array.from(document.querySelectorAll(".optionBtn")).forEach(b => b.disabled = true);
  if(currentQ === quizData.length){ submitBtn.style.display = "inline-block"; }
}

nextBtn.addEventListener("click", () => { showQuestion(); });
submitBtn.addEventListener("click", () => { showScore(); });

function showScore(){
  quizContainer.style.display = "block";
  questionArea.innerHTML = "Quiz Completed!";
  optionsArea.innerHTML = "";
  wrongCorrectArea.textContent = "";
  timerArea.textContent = "";
  scoreArea.textContent = `Your Score: ${score} / ${quizData.length}`;
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
} 
