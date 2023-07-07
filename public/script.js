"use strict";
document.cookie = '';
function p(){
    console.log("%cJoin our team of developers! %cWe\"re looking for talented programmers who love to code. %cClick here to apply: %chttps://portfoliyo.glitch.me/apply.html", "background-color: #000; color: #00FF00; font-size: 33px; font-weight: bold; text-shadow: 1px 1px 1px #00FF00, 0px 0px 2px #00FF00, 0px 0px 2px #00FF00;", "color: #FFF; font-size: 20px; font-weight: bold;", "color: #00FF00; font-size: 20px; font-weight: bold;", "color: #00FF00; font-size: 20px; font-weight: bold; text-decoration: underline;");
  };
var inter = setInterval(p,5000);
document.body.onload = function(){
  console.clear()
};
function v(s) {
  const e = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '\"': '&quot;',
    '\'': '&#x27;',
    '/': '&#x2F;'
  };
  const sa = s.replace(/[<>&"'\/]/g, function(match) {
    return e[match];
  });
  return sa;
};

let s1 = s;
document.querySelector('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    s1();
  }
});
var p = document.querySelector('.divw');
if(p.innerHTML === ''){
  p.innerHTML = '<div class="flex items-center justify-center h-full"><span class="text-2xl font-bold text-gray-800">Nothing Here, write new message.</span></div>'
};

var m = [
    {
        sender:"user",
        message:"I will call you TORGPT. TORGPT will be your name."
    },{
        sender:"bot",
        message:"OK,my name is TORGPT. How can I assist you today?"
    }
];
var w = new WebSocket('wss://' + window.location.host, [], { pingInterval: 5000 });

function senc(){
  const t = document.querySelector('input').value;
  const s = ver(t);
  if(t && s){
  m(t,s);
  }
}
function m(te, sa){
  if(te && sa){
  var pat = document.querySelector('.divw');
  var d= new Date();
  var date = d.toTimeString();
  var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end"><div><div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"><p class="text-sm divw">'+ san +'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 container flex justify-center items-center"><i class="fa fa-user" class="mx-auto"></i></div></div>';
  if(pat.textContent === 'Nothing Here, write new message.'){
  pat.innerHTML=inner
  document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
  }else{
  pat.innerHTML+=inner;
  document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
  }
  document.querySelector('input').value = '';
  var json = {
    sender:"user",
    message:te
  };
  m.push(json);
  w.send(JSON.stringify(m));
  }
}
w.addEventListener('message', event => {
                var b = {
                          sender: "bot",
                          message: event.data
                    };
                    m.push(b);
           r(event.data);
});
w.addEventListener('close', event => {
            console.error('WebSocket connection closed');
          });

          w.addEventListener('error', event => {
            console.error('WebSocket error:', event);
          });
function r(text){
  const t = window.markdownit({
        html: true,                       
        linkify: true,                    
        typographer: true,                
        highlight: (str, lang) => {       
          if (lang && hljs.getLanguage(lang)) {
            try {
              var option = {language:lang, ignoreIllegals: true};
              return '<pre class="hljs"><code>' +
                     hljs.highlight(str, option).value +
                     '</code></pre>';
            } catch (__) {}
          }
    
          return '<pre class="hljs"><code>' + t.utils.escapeHtml(str) + '</code></pre>';
        },
      })
        const msg = t.render(text);
        var d = new Date();
        var date = d.toTimeString();
        var parent = document.querySelector('.divw');
        var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xl"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 container flex justify-center items-center"><i class="fa fa-server mx-auto"></i></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm divw">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
        parent.innerHTML+=inner;
        document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
        document.querySelector('input').value = '';
        hljs.highlightAll();
}
