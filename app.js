function showScreen(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
  document.getElementById('bottomNav').style.display='flex';
  window.scrollTo(0,0);
}
function login(){
  const email=document.getElementById('email').value;
  if(!email){alert('Please enter email');return;}
  alert('Welcome '+email+'! Login successful');
  showScreen('dashboard');
}
function filterStudents(){
  const q=document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('#studentList .row').forEach(r=>{
    r.style.display = r.innerText.toLowerCase().includes(q) ? 'flex':'none';
  });
}
function addStudent(){
  const name=prompt('Enter student name:');
  if(name){alert(name+' added successfully! (Demo)');}
}
function markPaid(){alert('Payment marked as Paid! Fee Tracker updated.');}
function filterInquiry(type,btn){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.inquiry').forEach(el=>{
    el.style.display = (type==='all' || el.dataset.type===type) ? 'block':'none';
  });
}
function addInquiry(){
  const v=document.getElementById('newInquiry').value;
  if(!v){alert('Type inquiry first');return;}
  alert('Inquiry added: '+v);
  document.getElementById('newInquiry').value='';
}
function exportPDF(){
  document.getElementById('exportMsg').innerText='✅ Report exported! In real app, PDF will download.';
  window.print();
}
