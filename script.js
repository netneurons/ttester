function send(){
  var parent = document.querySelectorAll('div')[1];
  var msg = document.querySelector('input').value;
  var d= new Date();
  var date = d.toTimeString();
  var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"><div><div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"><p class="text-sm">'+ msg +'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div></div>';
  parent.innerHTML+=inner;
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