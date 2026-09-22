const screens=[...document.querySelectorAll(".screen")], nav=[...document.querySelectorAll(".bottomnav button")];
function go(name){screens.forEach(s=>s.classList.toggle("active",s.dataset.screen===name));nav.forEach(b=>b.classList.toggle("active",b.dataset.go===name));window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
document.getElementById("profileBtn").onclick=()=>go("profile");
const prices={daily:{m:"GMD 15 / day",s:"GMD 5 / day"},weekly:{m:"GMD 75 / week",s:"GMD 25 / week"},monthly:{m:"GMD 199 / month",s:"GMD 79 / month"},yearly:{m:"GMD 1,990 / year",s:"GMD 790 / year"}};
document.querySelectorAll("#planTabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#planTabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");let p=prices[b.dataset.period];mobilityPrice.textContent=p.m;safetyPrice.textContent=p.s;});
function toast(t){let el=document.getElementById("toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200);}
document.querySelectorAll(".subscribe").forEach(b=>b.onclick=()=>toast("Demo: subscription checkout opened"));
document.getElementById("addMoney").onclick=()=>toast("Demo: top-up flow opened");
document.getElementById("requestRide").onclick=()=>{let d=document.getElementById("destination").value.trim();document.getElementById("rideResult").innerHTML=d?'<div class="result"><b>Ride requested.</b><br>Finding a nearby driver for '+d+'.</div>':'<div class="result">Enter a destination first.</div>';};
document.querySelectorAll(".admin-tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".admin-tabs button").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".admin-panel").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelector('[data-panel="'+b.dataset.admin+'"]').classList.add("active");});
document.querySelectorAll(".save").forEach(b=>b.onclick=()=>toast("Demo configuration saved locally"));
let timer=null,sos=document.getElementById("sos");
function activate(test=false){document.getElementById("safetyStatus").innerHTML='<div class="result"><b>'+(test?'Test alert':'Safety alert activated')+'.</b><br>Trusted contacts and eligible verified responders would be notified according to the configured privacy policy.</div>';toast(test?"Test alert created":"Safety alert activated");}
["mousedown","touchstart"].forEach(e=>sos.addEventListener(e,ev=>{ev.preventDefault();timer=setTimeout(()=>activate(false),2000);}));
["mouseup","mouseleave","touchend","touchcancel"].forEach(e=>sos.addEventListener(e,()=>clearTimeout(timer)));
document.getElementById("testAlert").onclick=()=>activate(true);
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
