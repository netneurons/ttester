function ver(s) {
  const entities = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '\"': '&quot;',
    '\'': '&#x27;',
    '/': '&#x2F;'
  };
  const sanitizedText = s.replace(/[<>&"'\/]/g, function(match) {
    return entities[match];
  });
  return sanitizedText;
};
function send(){
  var parent = document.querySelector('.divw');
  var msssg = document.querySelector('input').value;
  var mssg = ver(msssg);
  var d= new Date();
  var date = d.toTimeString();
  if(mssg){
  var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"><div><div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"><p class="text-sm divw">'+ mssg +'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 container flex justify-center items-center"><i class="fa fa-user" class="mx-auto"></i></div></div>';
  if(parent.textContent === 'Nothing Here, write new message.'){
  parent.innerHTML=inner
  document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
  }else{
  parent.innerHTML+=inner;
  document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
  }
  document.querySelector('input').value = '';
  sendMessage(msssg)
  }
}
let s1 = send;
document.querySelector('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    s1();
  }
});
var p = document.querySelector('.divw');
if(p.innerHTML === ''){
  p.innerHTML = '<div class="flex items-center justify-center h-full"><span class="text-2xl font-bold text-gray-800">Nothing Here, write new message.</span></div>'
};

function make(text){
    const t = window.markdownit({
        html: true,                       
        linkify: true,                    
        typographer: true                
      })
        const msg = t.render(text);
        var d = new Date();
        var date = d.toTimeString();
        var parent = document.querySelector('.divw');
        var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 container flex justify-center items-center"><i class="fa fa-server mx-auto"></i></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm divw">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
        parent.innerHTML+=inner;
        document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
        document.querySelector('input').value = '';
};

var socket = new WebSocket('wss://' + window.location.host, [], { pingInterval: 5000 });

          socket.addEventListener('open', event => {
            console.log('WebSocket connection opened');
          });

          socket.addEventListener('message', event => {
            console.log('Received message:', event.data);
            make(event.data)
          });

          socket.addEventListener('close', event => {
            console.log('WebSocket connection closed');
          });

          socket.addEventListener('error', event => {
            console.error('WebSocket error:', event);
          });

          function sendMessage(message) {
          const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  socket.send(encodedMessage);
          }