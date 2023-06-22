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
  res(mssg, msssg);
  }
}
document.querySelector('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    send();
  }
});
var p = document.querySelector('.divw');
if(p.innerHTML === ''){
  p.innerHTML = '<div class="flex items-center justify-center h-full"><span class="text-2xl font-bold text-gray-800">Nothing Here, write new message.</span></div>'
};
var is = true;
async function res(m, nsn){
  if(is===true){
    ress(m, nsn);
  }else{
  var prompt = m;
    var ns = nsn;
  var url = '/conversation?subject='+ns+'&is=false';
  fetch(url)
      .then(response => response.text())
      .then(text => {
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
        var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 container flex justify-center items-center"><i class="fa fa-server mx-auto"></i></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm divw">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
        parent.innerHTML+=inner;
        document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
        document.querySelector('input').value = '';
        hljs.highlightAll();
}).catch(error => console.error(error));
}
};

async function ress(m, nsn){
  is=false;
    var prompt = m;
  var ns = nsn;
  var url = '/conversation?subject='+ns+'&is=true';
  fetch(url)
      .then(response => response.text())
      .then(text => {
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
        var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 container flex justify-center items-center"><i class="fa fa-server mx-auto"></i></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm divw">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
        parent.innerHTML+=inner;
        document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
        document.querySelector('input').value = '';
        hljs.highlightAll();
}).catch(error => console.error(error));
};
function send2(){
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
  complete(mssg, msssg);
  } 
};
function complete(msg, nsn){
 var prompt = msg;
  var ns = nsn;
var url = '/complete?subject='+ns;
  fetch(url)
      .then(response => response.text())
      .then(text => {
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
        var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 container flex justify-center items-center"><i class="fa fa-server mx-auto"></i></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm divw">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
        parent.innerHTML+=inner;
        document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
        document.querySelector('input').value = '';
        hljs.highlightAll();
}).catch(error => console.error(error));
};
function migrate(){
  var alert = document.querySelector('div.bg-yellow-100');
  alert.innerHTML = '<p class="font-bold">Warning</p><p>This is a completing text version if you want to back to the non-stable version please refresh the browser and it will be migrated.';
  var btn = document.querySelector('button');
  btn.setAttribute('onclick','send2()');
}