function send(){
  var parent = document.querySelectorAll('div')[1];
  var msg = document.querySelector('input').value;
  var d= new Date();
  var date = d.toTimeString();
  var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"><div><div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"><p class="text-sm">'+ msg +'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div></div>';
  if(parent.textContent === 'Nothing Here, write new message.'){
  parent.innerHTML=inner
  }else{
  parent.innerHTML+=inner;
  }
  document.querySelector('input').value = '';
  var uall = [];
  var message = {
    sender: 'user',
    msg: msg
  };
  uall.push(message);
  receive(uall);
}
function receive(msgs){
  var ms = msgs;
  var d = new Date();
  var date = d.toTimeString();
  var msg = ms[ms.length - 1].msg;
  var parent = document.querySelectorAll('div')[1];
  var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
  parent.innerHTML+=inner;
}
document.querySelector('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    send()
  }
});
var p = document.querySelectorAll('div')[1];
if(p.innerHTML === ''){
  p.innerHTML = '<div class="flex items-center justify-center h-full"><span class="text-2xl font-bold text-gray-800">Nothing Here, write new message.</span></div>'
};
async function res(m){
  var prompt = m;
  var url = 'https://hugdog.glitch.me/conversation?subject='+m+'&is=false';
  var response = await fetch(url);
  var
};
async function ress(m){
  
}