const QUESTIONS=[
{t:"General Awareness",q:"What is the full form of IOB?",a:"Indian Overseas Bank",e:"IOB stands for Indian Overseas Bank."},
{t:"General Awareness",q:"Indian Overseas Bank was established in which year?",a:"1937",e:"IOB was founded in 1937."},
{t:"Banking Awareness",q:"What does RBI stand for?",a:"Reserve Bank of India",e:"RBI is India's central banking institution."},
{t:"Banking Awareness",q:"What is the primary function of a bank?",a:"Accepting deposits and providing loans",e:"Banks mainly mobilize deposits and provide credit and other financial services."},
{t:"Banking Awareness",q:"What does KYC stand for?",a:"Know Your Customer",e:"KYC is the process of verifying a customer's identity."},
{t:"Quantitative Aptitude",q:"What is 25% of 240?",a:"60",e:"240 × 25/100 = 60."},
{t:"Quantitative Aptitude",q:"If a train travels 120 km in 2 hours, what is its average speed?",a:"60 km/h",e:"Speed = Distance ÷ Time = 120 ÷ 2."},
{t:"Quantitative Aptitude",q:"The ratio 20:30 simplified is?",a:"2:3",e:"Divide both terms by 10."},
{t:"Reasoning Ability",q:"Find the next number: 2, 4, 8, 16, ?",a:"32",e:"Each number is multiplied by 2."},
{t:"Reasoning Ability",q:"If CAT is coded as DBU, how is DOG coded?",a:"EPH",e:"Each letter is shifted one position forward."},
{t:"Reasoning Ability",q:"Which one is different: Apple, Mango, Carrot, Banana?",a:"Carrot",e:"Carrot is a vegetable; the others are fruits."},
{t:"English Language",q:"Choose the synonym of 'Rapid'.",a:"Fast",e:"Rapid means happening quickly or at high speed."},
{t:"English Language",q:"Choose the antonym of 'Ancient'.",a:"Modern",e:"Modern is the opposite of ancient."},
{t:"English Language",q:"Fill in the blank: She ___ to the bank every day.",a:"goes",e:"With singular subject 'She', use 'goes'."},
{t:"Computer Knowledge",q:"What does CPU stand for?",a:"Central Processing Unit",e:"CPU is the main processor of a computer."},
{t:"Computer Knowledge",q:"Which device is used to enter text into a computer?",a:"Keyboard",e:"A keyboard is an input device used for text entry."},
{t:"Computer Knowledge",q:"What is the shortcut for Copy in Windows?",a:"Ctrl + C",e:"Ctrl+C copies selected content."},
{t:"Current Affairs",q:"What is the capital of Tamil Nadu?",a:"Chennai",e:"Chennai is the capital city of Tamil Nadu."},
{t:"Current Affairs",q:"Which institution regulates monetary policy in India?",a:"Reserve Bank of India",e:"RBI is responsible for monetary policy in India."},
{t:"General Awareness",q:"What is India's national currency?",a:"Indian Rupee",e:"The Indian Rupee (INR) is India's official currency."},
{t:"Banking Awareness",q:"What does ATM stand for?",a:"Automated Teller Machine",e:"ATM allows customers to perform basic banking transactions."},
{t:"Banking Awareness",q:"What is NEFT?",a:"National Electronic Funds Transfer",e:"NEFT is an electronic fund transfer system in India."},
{t:"Quantitative Aptitude",q:"What is 15 × 12?",a:"180",e:"15 multiplied by 12 equals 180."},
{t:"Quantitative Aptitude",q:"A product costs ₹500 and is sold at 10% discount. Selling price?",a:"₹450",e:"10% of ₹500 is ₹50; ₹500−₹50 = ₹450."},
{t:"Reasoning Ability",q:"Complete the series: A, C, E, G, ?",a:"I",e:"Letters increase by two positions."},
{t:"English Language",q:"Choose the correct spelling.",a:"Necessary",e:"The correct spelling is Necessary."},
{t:"Computer Knowledge",q:"Which is an operating system?",a:"Windows",e:"Windows is an operating system."},
{t:"General Awareness",q:"Which is the largest ocean?",a:"Pacific Ocean",e:"The Pacific Ocean is the largest ocean on Earth."},
{t:"Banking Awareness",q:"What is a savings account mainly used for?",a:"Saving money and earning interest",e:"Savings accounts provide a safe place to keep money and generally pay interest."},
{t:"Quantitative Aptitude",q:"If 5 pens cost ₹100, what is the cost of one pen?",a:"₹20",e:"₹100 ÷ 5 = ₹20."},
{t:"Reasoning Ability",q:"If all roses are flowers and some flowers are red, can we conclude all roses are red?",a:"No",e:"The information only says some flowers are red, not all roses."},
{t:"English Language",q:"What is the plural of 'child'?",a:"Children",e:"Children is the irregular plural form of child."},
{t:"Computer Knowledge",q:"What does PDF stand for?",a:"Portable Document Format",e:"PDF is a document format designed for consistent viewing and sharing."},
{t:"General Awareness",q:"How many states are there in India?",a:"28",e:"India has 28 states and 8 Union Territories."},
{t:"Banking Awareness",q:"What is a fixed deposit?",a:"A deposit kept for a fixed period at an agreed interest rate",e:"FDs are deposits held for a predetermined tenure."},
{t:"Quantitative Aptitude",q:"What is 20% of 750?",a:"150",e:"750 × 20/100 = 150."},
{t:"Reasoning Ability",q:"Book is to Reading as Fork is to?",a:"Eating",e:"A book is associated with reading; a fork is associated with eating."},
{t:"English Language",q:"Identify the adjective: 'She wore a beautiful dress.'",a:"Beautiful",e:"Beautiful describes the noun dress."},
{t:"Computer Knowledge",q:"Which key is commonly used to refresh a webpage?",a:"F5",e:"F5 refreshes a webpage in most browsers."}
,
{t:"Banking Awareness",q:"What is CRR?",a:"Cash Reserve Ratio",e:"The percentage of deposits banks must keep with the RBI as cash reserve."},
{t:"Banking Awareness",q:"What is SLR?",a:"Statutory Liquidity Ratio",e:"The percentage of deposits banks maintain in liquid assets as prescribed."},
{t:"Banking Awareness",q:"What does NPA stand for?",a:"Non-Performing Asset",e:"A loan asset becomes NPA when it stops generating income as per banking rules."},
{t:"Banking Awareness",q:"What does EMI stand for?",a:"Equated Monthly Instalment",e:"EMI is the regular payment made toward a loan."},
{t:"Banking Awareness",q:"What is a debit card mainly used for?",a:"Making payments using funds in a bank account",e:"A debit card generally accesses the customer's available account balance."},
{t:"Banking Awareness",q:"What is a credit card?",a:"A card that provides a line of credit",e:"Credit cards allow purchases using credit subject to terms and limits."},
{t:"Banking Awareness",q:"What is IFSC?",a:"Indian Financial System Code",e:"IFSC identifies a bank branch for electronic fund transfers."},
{t:"Banking Awareness",q:"What is MICR?",a:"Magnetic Ink Character Recognition",e:"MICR technology is used for processing bank cheques."},
{t:"Banking Awareness",q:"What is UPI?",a:"Unified Payments Interface",e:"UPI enables instant bank-to-bank digital payments."},
{t:"Banking Awareness",q:"What is IMPS?",a:"Immediate Payment Service",e:"IMPS is an instant electronic fund transfer service."},
{t:"Banking Awareness",q:"What is a demand deposit?",a:"A deposit withdrawable on demand",e:"Current and savings deposits are common demand-deposit examples."},
{t:"Banking Awareness",q:"What is a term deposit?",a:"A deposit kept for a specified period",e:"Fixed and recurring deposits are forms of term deposits."},
{t:"Banking Awareness",q:"What is a recurring deposit?",a:"A deposit made regularly for a fixed tenure",e:"Customers usually deposit a fixed amount at regular intervals."},
{t:"Banking Awareness",q:"What is a bank reconciliation statement?",a:"A statement reconciling bank and book balances",e:"It explains differences between the cash book and bank statement."},
{t:"Banking Awareness",q:"What is the repo rate?",a:"The rate at which RBI lends to banks against eligible securities",e:"Repo rate is a key monetary-policy rate."},
{t:"Banking Awareness",q:"What is reverse repo rate?",a:"The rate at which RBI borrows from banks",e:"It is used as a monetary-policy liquidity tool."},
{t:"Banking Awareness",q:"What is a cheque?",a:"A written order to a bank to pay money",e:"A cheque instructs a bank to make payment from an account."},
{t:"Banking Awareness",q:"What is a crossed cheque?",a:"A cheque generally payable through a bank account",e:"Crossing adds a level of payment security."},
{t:"Banking Awareness",q:"What is overdraft?",a:"A facility allowing withdrawal beyond the available balance",e:"An overdraft permits borrowing up to an approved limit."},
{t:"Banking Awareness",q:"What is a bank locker used for?",a:"Safekeeping valuables",e:"Lockers are provided by banks for secure storage of permitted valuables."},
{t:"Quantitative Aptitude",q:"What is 35% of 200?",a:"70",e:"200 × 35/100 = 70."},
{t:"Quantitative Aptitude",q:"What is 18 + 27?",a:"45",e:"18 + 27 = 45."},
{t:"Quantitative Aptitude",q:"What is 144 ÷ 12?",a:"12",e:"144 divided by 12 equals 12."},
{t:"Quantitative Aptitude",q:"What is 17 × 6?",a:"102",e:"17 × 6 = 102."},
{t:"Quantitative Aptitude",q:"What is the average of 10, 20 and 30?",a:"20",e:"(10 + 20 + 30) ÷ 3 = 20."},
{t:"Quantitative Aptitude",q:"What is the simple interest on ₹1,000 at 10% per year for 2 years?",a:"₹200",e:"SI = P × R × T / 100 = 1000 × 10 × 2 / 100."},
{t:"Quantitative Aptitude",q:"A number increases from 100 to 120. What is the percentage increase?",a:"20%",e:"Increase is 20 on a base of 100, so it is 20%."},
{t:"Quantitative Aptitude",q:"If 3 notebooks cost ₹90, what is the cost of 5 notebooks at the same rate?",a:"₹150",e:"One notebook costs ₹30, so 5 cost ₹150."},
{t:"Quantitative Aptitude",q:"What is the LCM of 4 and 6?",a:"12",e:"12 is the smallest positive number divisible by both 4 and 6."},
{t:"Quantitative Aptitude",q:"What is the HCF of 18 and 24?",a:"6",e:"6 is the greatest common factor of 18 and 24."},
{t:"Quantitative Aptitude",q:"A ₹800 item has a 25% discount. What is the selling price?",a:"₹600",e:"Discount is ₹200, so selling price is ₹600."},
{t:"Quantitative Aptitude",q:"What is 3/4 of 80?",a:"60",e:"80 × 3/4 = 60."},
{t:"Quantitative Aptitude",q:"If 2x = 50, what is x?",a:"25",e:"Divide both sides by 2."},
{t:"Quantitative Aptitude",q:"A car travels 240 km in 4 hours. Average speed?",a:"60 km/h",e:"Speed = 240 ÷ 4."},
{t:"Quantitative Aptitude",q:"What is 12.5% of 400?",a:"50",e:"400 × 12.5/100 = 50."},
{t:"Quantitative Aptitude",q:"If a:b = 3:5 and a = 15, what is b?",a:"25",e:"15 corresponds to 3 parts, so one part is 5 and b is 25."},
{t:"Quantitative Aptitude",q:"What is the square of 15?",a:"225",e:"15 × 15 = 225."},
{t:"Quantitative Aptitude",q:"What is the cube of 4?",a:"64",e:"4 × 4 × 4 = 64."},
{t:"Quantitative Aptitude",q:"A shopkeeper buys an item for ₹500 and sells it for ₹600. Profit percentage?",a:"20%",e:"Profit is ₹100; ₹100/₹500 × 100 = 20%."},
{t:"Quantitative Aptitude",q:"What is 0.75 as a fraction in simplest form?",a:"3/4",e:"0.75 = 75/100 = 3/4."},
{t:"Reasoning Ability",q:"Find the next number: 3, 6, 12, 24, ?",a:"48",e:"Each term is doubled."},
{t:"Reasoning Ability",q:"Find the next number: 5, 10, 15, 20, ?",a:"25",e:"The sequence increases by 5."},
{t:"Reasoning Ability",q:"Find the next letter: B, D, F, H, ?",a:"J",e:"Every second letter is selected."},
{t:"Reasoning Ability",q:"If PEN is coded as QFO, how is CAT coded?",a:"DBU",e:"Each letter is shifted one position forward."},
{t:"Reasoning Ability",q:"Which is different: Dog, Cat, Cow, Rose?",a:"Rose",e:"Rose is a plant; the others are animals."},
{t:"Reasoning Ability",q:"If today is Monday, what day will it be after 10 days?",a:"Thursday",e:"Ten days after Monday is Thursday."},
{t:"Reasoning Ability",q:"Book is to Library as Patient is to?",a:"Hospital",e:"A book is associated with a library; a patient with a hospital."},
{t:"Reasoning Ability",q:"Find the odd one: 2, 3, 5, 9, 11",a:"9",e:"9 is not a prime number."},
{t:"Reasoning Ability",q:"Complete: 1, 4, 9, 16, ?",a:"25",e:"These are consecutive square numbers."},
{t:"Reasoning Ability",q:"If SOUTH is written as HTUOS, what operation is used?",a:"Reverse order",e:"The letters are written from right to left."},
{t:"Reasoning Ability",q:"Which number does not belong: 8, 16, 24, 31, 40?",a:"31",e:"The others are divisible by 8."},
{t:"Reasoning Ability",q:"A is taller than B and B is taller than C. Who is shortest?",a:"C",e:"From A > B > C, C is shortest."},
{t:"Reasoning Ability",q:"Find the next number: 100, 90, 80, 70, ?",a:"60",e:"The sequence decreases by 10."},
{t:"Reasoning Ability",q:"If all pens are stationery and some stationery are expensive, are all pens expensive?",a:"No",e:"The statement about some stationery does not imply all pens are expensive."},
{t:"Reasoning Ability",q:"Which comes next: AZ, BY, CX, DW, ?",a:"EV",e:"First letters increase and second letters decrease."},
{t:"English Language",q:"Choose the synonym of 'Brave'.",a:"Courageous",e:"Courageous has a similar meaning to brave."},
{t:"English Language",q:"Choose the antonym of 'Expand'.",a:"Contract",e:"Contract means to become smaller or reduce."},
{t:"English Language",q:"Choose the correct spelling.",a:"Accommodation",e:"Accommodation is the correct spelling."},
{t:"English Language",q:"Fill in the blank: They ___ playing cricket.",a:"are",e:"The plural subject 'They' takes 'are' in the present continuous."},
{t:"English Language",q:"Choose the correct article: He is ___ honest man.",a:"an",e:"'Honest' begins with a vowel sound, so 'an' is used."},
{t:"English Language",q:"What is the plural of 'mouse'?",a:"Mice",e:"Mice is the irregular plural form."},
{t:"English Language",q:"Identify the noun: 'The manager signed the letter.'",a:"Manager",e:"Manager is a person/naming word in the sentence."},
{t:"English Language",q:"Choose the synonym of 'Begin'.",a:"Start",e:"Start and begin have similar meanings."},
{t:"English Language",q:"Choose the antonym of 'Accept'.",a:"Reject",e:"Reject is the opposite of accept."},
{t:"English Language",q:"Fill in the blank: I have ___ my homework.",a:"completed",e:"The present perfect form is 'have completed'."},
{t:"English Language",q:"Choose the correct sentence.",a:"She goes to school every day.",e:"The sentence uses the correct subject-verb agreement."},
{t:"English Language",q:"What is the past tense of 'write'?",a:"Wrote",e:"Wrote is the simple past form of write."},
{t:"English Language",q:"What is the opposite of 'Victory'?",a:"Defeat",e:"Defeat is the opposite of victory."},
{t:"English Language",q:"Choose the synonym of 'Rapid'.",a:"Swift",e:"Swift means fast or rapid."},
{t:"English Language",q:"Identify the adverb: 'He runs quickly.'",a:"Quickly",e:"Quickly describes how he runs."},
{t:"Computer Knowledge",q:"What does RAM stand for?",a:"Random Access Memory",e:"RAM is temporary working memory used by a computer."},
{t:"Computer Knowledge",q:"What does ROM stand for?",a:"Read Only Memory",e:"ROM stores data that is generally retained without power."},
{t:"Computer Knowledge",q:"Which is an output device?",a:"Monitor",e:"A monitor displays information to the user."},
{t:"Computer Knowledge",q:"Which device is used to point and click?",a:"Mouse",e:"A mouse is a common pointing input device."},
{t:"Computer Knowledge",q:"What does URL stand for?",a:"Uniform Resource Locator",e:"A URL identifies the location of a resource on the web."},
{t:"Computer Knowledge",q:"What does HTTP stand for?",a:"Hypertext Transfer Protocol",e:"HTTP is a protocol used for communication on the web."},
{t:"Computer Knowledge",q:"What does HTML stand for?",a:"HyperText Markup Language",e:"HTML structures content on web pages."},
{t:"Computer Knowledge",q:"Which storage device uses flash memory?",a:"USB flash drive",e:"USB flash drives use non-volatile flash memory."},
{t:"Computer Knowledge",q:"What is an email attachment?",a:"A file sent along with an email",e:"Attachments can contain documents, images and other files."},
{t:"Computer Knowledge",q:"Which key is commonly used to delete the character to the left of the cursor?",a:"Backspace",e:"Backspace removes the character immediately to the left."},
{t:"Computer Knowledge",q:"What is cloud computing?",a:"Using computing resources over the internet",e:"Cloud services provide storage, processing and other resources online."},
{t:"Computer Knowledge",q:"What is a web browser?",a:"Software used to access websites",e:"Browsers such as Chrome and Firefox display web content."},
{t:"Computer Knowledge",q:"What does Wi-Fi provide?",a:"Wireless network connectivity",e:"Wi-Fi connects devices to a network without a physical cable."},
{t:"Computer Knowledge",q:"Which is an example of a search engine?",a:"Google",e:"Google is a widely used web search engine."},
{t:"Computer Knowledge",q:"What does Ctrl + V do?",a:"Paste",e:"Ctrl+V pastes copied or cut content."},
{t:"General Awareness",q:"What is the capital of India?",a:"New Delhi",e:"New Delhi is the capital of India."},
{t:"General Awareness",q:"What is the national animal of India?",a:"Bengal Tiger",e:"The Bengal tiger is India's national animal."},
{t:"General Awareness",q:"What is the national bird of India?",a:"Indian Peacock",e:"The Indian peacock is India's national bird."},
{t:"General Awareness",q:"How many Union Territories does India have?",a:"8",e:"India currently has 8 Union Territories."},
{t:"General Awareness",q:"Which planet is known as the Red Planet?",a:"Mars",e:"Mars appears reddish due to iron-rich minerals on its surface."},
{t:"General Awareness",q:"Which is the largest continent?",a:"Asia",e:"Asia is the world's largest continent by area."},
{t:"General Awareness",q:"Which is the longest river in India?",a:"Ganga",e:"The Ganga is commonly regarded as India's longest major river."},
{t:"General Awareness",q:"What is the currency of Japan?",a:"Yen",e:"The Japanese currency is the yen."},
{t:"General Awareness",q:"Which gas is most abundant in Earth's atmosphere?",a:"Nitrogen",e:"Nitrogen makes up about 78% of Earth's atmosphere."},
{t:"General Awareness",q:"How many days are there in a leap year?",a:"366",e:"A leap year has one extra day in February."},
{t:"Current Affairs",q:"Which body conducts monetary policy in India?",a:"Reserve Bank of India",e:"RBI is responsible for India's monetary policy framework."},
{t:"Current Affairs",q:"Which digital payment system is widely used for instant bank payments in India?",a:"UPI",e:"UPI enables instant interoperable digital payments."},
{t:"Current Affairs",q:"What is the full form of GST?",a:"Goods and Services Tax",e:"GST is an indirect tax system covering goods and services."},
{t:"Current Affairs",q:"What is the full form of GDP?",a:"Gross Domestic Product",e:"GDP measures the value of goods and services produced within an economy."},
{t:"Current Affairs",q:"Which ministry is primarily responsible for India's Union Budget?",a:"Ministry of Finance",e:"The Ministry of Finance prepares and manages the Union Budget process."}];

let user=JSON.parse(localStorage.getItem("zaraaUser")||"null");
let results=JSON.parse(localStorage.getItem("zaraaResults")||"[]");
let currentTest=null,timer=null;

const $=id=>document.getElementById(id);
function toast(msg){$("toast").textContent=msg;$("toast").style.display="block";setTimeout(()=>$("toast").style.display="none",2200)}
function init(){
  $("qCount").textContent=QUESTIONS.length+"+";
  if(user){openApp();} else {$("loginPage").classList.remove("hidden");}
  buildSubjects(); buildFilters(); renderQuestions(); renderResults();
}
function openApp(){
  $("loginPage").classList.add("hidden");$("app").classList.remove("hidden");
  ["sideName","topName"].forEach(x=>$(x).textContent=user.name);
  $("sideEmail").textContent=user.email;$("avatar").textContent=user.name[0].toUpperCase();$("topAvatar").textContent=user.name[0].toUpperCase();
  updateStats();
}
$("loginForm").addEventListener("submit",e=>{
  e.preventDefault();

  const name=$("nameInput").value.trim();
  const email=$("emailInput").value.trim();

  // Strict email validation
  const emailPattern=/^[A-Za-z0-9](?:[A-Za-z0-9.!#$%&'*+\-\/=?^_`{|}~]*[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9\-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9\-]*[A-Za-z0-9])?)+$/;

  if(name.length<3){
    toast("Please enter a valid full name.");
    $("nameInput").focus();
    return;
  }

  if(name.length>60){
    toast("Name is too long.");
    $("nameInput").focus();
    return;
  }

  if(!emailPattern.test(email) || email.includes("..") || email.length>100){
    toast("Please enter a valid email address.");
    $("emailInput").focus();
    return;
  }

  user={name,email};
  localStorage.setItem("zaraaUser",JSON.stringify(user));
  openApp();
  toast("Welcome to Zaraa Academy!");
});
$("logoutBtn").onclick=()=>{localStorage.removeItem("zaraaUser");location.reload()};
$("menuBtn").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");
document.querySelectorAll(".nav").forEach(b=>b.onclick=()=>showPage(b.dataset.page));
function showPage(page){
  if(currentTest){clearInterval(timer);currentTest=null;}
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));$(page).classList.remove("hidden");
  document.querySelectorAll(".nav").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  $("pageTitle").textContent={dashboard:"Dashboard",questions:"Questions & Answers",practice:"Practice Test",mock:"Mock Exam",results:"My Results"}[page];
  if(page==="results")renderResults();
  document.querySelector(".sidebar").classList.remove("open");
}
function buildSubjects(){
 const data=[["📘","General Awareness"],["🏦","Banking Awareness"],["🔢","Quantitative Aptitude"],["🧩","Reasoning Ability"],["🔤","English Language"],["💻","Computer Knowledge"],["📰","Current Affairs"]];
 $("subjectGrid").innerHTML=data.map(x=>`<div class="subject" onclick="openTopic('${x[1]}')"><div class="icon">${x[0]}</div><h4>${x[1]}</h4><p>${QUESTIONS.filter(q=>q.t===x[1]).length} practice questions</p></div>`).join("");
 $("practiceTopic").innerHTML='<option value="all">Mixed Topics</option>'+data.map(x=>`<option>${x[1]}</option>`).join("");
}
function buildFilters(){
 $("topicFilter").innerHTML='<option value="all">All Topics</option>'+[...new Set(QUESTIONS.map(q=>q.t))].map(t=>`<option>${t}</option>`).join("");
}
function openTopic(t){showPage("questions");$("topicFilter").value=t;renderQuestions()}
function renderQuestions(){
 let term=($("searchQ").value||"").toLowerCase(),topic=$("topicFilter").value;
 let arr=QUESTIONS.filter(x=>(topic==="all"||x.t===topic)&&(x.q.toLowerCase().includes(term)||x.a.toLowerCase().includes(term)));
 $("questionList").innerHTML=arr.map((x,i)=>`<article class="q-card"><div class="topic">${x.t.toUpperCase()}</div><h4>${i+1}. ${x.q}</h4><div class="answer"><b>Answer:</b> ${x.a}</div><p class="explain">Explanation: ${x.e}</p></article>`).join("")||"<div class='q-card'>No questions found.</div>";
}
$("searchQ").addEventListener("input",renderQuestions);$("topicFilter").addEventListener("change",renderQuestions);
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function startTest(type){
 let topic=$("practiceTopic").value;
 let pool=topic==="all"?QUESTIONS:QUESTIONS.filter(q=>q.t===topic);
 let count=type==="mock"?20:Math.min(+$("practiceCount").value,pool.length);
 currentTest={type,questions:shuffle(pool).slice(0,count),index:0,answers:Array(count).fill(null),seconds:type==="mock"?1200:count*90};
 let area=type==="mock"?$("mockArea"):$("testArea");let setup=type==="mock"?$("mockSetup"):$("practiceSetup");
 setup.classList.add("hidden");area.classList.remove("hidden");renderTest();
 clearInterval(timer);timer=setInterval(()=>{currentTest.seconds--;renderTimer();if(currentTest.seconds<=0)submitTest()},1000);
}
function renderTimer(){let el=document.querySelector(".timer");if(!el||!currentTest)return;let m=Math.floor(currentTest.seconds/60),s=currentTest.seconds%60;el.textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`}
function renderTest(){
 let t=currentTest,q=t.questions[t.index],area=t.type==="mock"?$("mockArea"):$("testArea");
 area.innerHTML=`<div class="test-box"><div class="test-head"><b>Question ${t.index+1} of ${t.questions.length}</b><span class="timer">--:--</span></div><div class="progress"><div style="width:${((t.index+1)/t.questions.length)*100}%"></div></div><div class="eyebrow">${q.t}</div><div class="test-q">${q.q}</div><div class="options">${makeOptions(q).map((o,i)=>`<button class="option ${t.answers[t.index]===o?"selected":""}" onclick="selectOption('${encodeURIComponent(o)}')">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div><div class="test-actions"><button class="secondary" ${t.index===0?"disabled":""} onclick="prevQ()">← Previous</button>${t.index===t.questions.length-1?`<button class="primary-btn" onclick="submitTest()">Submit Test</button>`:`<button class="primary-btn" onclick="nextQ()">Next →</button>`}</div></div>`;
 renderTimer();
}
function makeOptions(q){
 let others=QUESTIONS.filter(x=>x.t===q.t&&x.a!==q.a).map(x=>x.a);
 return shuffle([q.a,...shuffle(others).slice(0,3)]);
}
function selectOption(enc){currentTest.answers[currentTest.index]=decodeURIComponent(enc);renderTest()}
function nextQ(){if(currentTest.index<currentTest.questions.length-1){currentTest.index++;renderTest()}}
function prevQ(){if(currentTest.index>0){currentTest.index--;renderTest()}}
function submitTest(){
 if(!currentTest)return;clearInterval(timer);
 let t=currentTest,score=t.questions.reduce((n,q,i)=>n+(t.answers[i]===q.a?1:0),0),pct=Math.round(score/t.questions.length*100);
 results.unshift({date:new Date().toLocaleString(),type:t.type,score,total:t.questions.length,pct});
 localStorage.setItem("zaraaResults",JSON.stringify(results));updateStats();
 let area=t.type==="mock"?$("mockArea"):$("testArea"),setup=t.type==="mock"?$("mockSetup"):$("practiceSetup");
 area.innerHTML=`<div class="result-card"><div class="eyebrow">TEST COMPLETED</div><h3>${pct>=50?"Great work!":"Keep practicing!"}</h3><div class="score">${pct}%</div><p>You scored <b>${score}/${t.questions.length}</b></p><button class="primary-btn" onclick="reviewTest()">Review Answers</button> <button class="secondary" onclick="resetTest('${t.type}')">Take Another Test</button><div id="review" class="result-review"></div></div>`;
 currentTest.finished={score,pct};
 toast("Test submitted successfully");
}
function reviewTest(){
 if(!currentTest?.finished)return;
 let area=currentTest.type==="mock"?$("mockArea"):$("testArea");
 $("review").innerHTML=currentTest.questions.map((q,i)=>`<div class="review-item"><b>${i+1}. ${q.q}</b><p>Your answer: <span class="${currentTest.answers[i]===q.a?"correct":"wrong"}">${currentTest.answers[i]||"Not answered"}</span></p><p>Correct answer: <b>${q.a}</b></p></div>`).join("");
}
function resetTest(type){currentTest=null;if(type==="mock"){$("mockArea").classList.add("hidden");$("mockSetup").classList.remove("hidden")}else{$("testArea").classList.add("hidden");$("practiceSetup").classList.remove("hidden")}}
function updateStats(){
 $("testCount").textContent=results.length;
 let best=results.length?Math.max(...results.map(x=>x.pct)):0;$("bestScore").textContent=best+"%";
}
function renderResults(){
 if(!results.length){$("resultsList").innerHTML="<div class='q-card'><b>No tests yet.</b><p>Start a practice test to see your results here.</p></div>";return}
 $("resultsList").innerHTML=results.map(r=>`<div class="result-row"><div><b>${r.type==="mock"?"IOB Full Mock Exam":"Practice Test"}</b><small style="display:block;color:#7b879a;margin-top:4px">${r.date}</small></div><div><b>${r.pct}%</b><small style="display:block;color:#7b879a">${r.score}/${r.total}</small></div></div>`).join("");
}
init();