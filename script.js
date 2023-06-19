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
  var str = JSON.parse(ms);
var msg = str[str.length - 1].msg;
  var d= new Date();
  var date = d.toTimeString();
  var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"><div><div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"><p class="text-sm">'+ msg +'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div></div>';
  parent.innerHTML+=inner;
}