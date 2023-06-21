function send(){
  var parent = document.querySelectorAll('div')[1];
  var mssg = document.querySelector('input').value;
  var d= new Date();
  var date = d.toTimeString();
  var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"><div><div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"><p class="text-sm">'+ mssg +'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div></div>';
  if(parent.textContent === 'Nothing Here, write new message.'){
  parent.innerHTML=inner
  document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
  }else{
  parent.innerHTML+=inner;
  document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
  }
  document.querySelector('input').value = '';
  res(mssg);
}
document.querySelector('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    send();
  }
});
var p = document.querySelectorAll('div')[1];
if(p.innerHTML === ''){
  p.innerHTML = '<div class="flex items-center justify-center h-full"><span class="text-2xl font-bold text-gray-800">Nothing Here, write new message.</span></div>'
};
var is = true;
async function res(m){
  if(is===true){
    ress(m);
  }else{
  var prompt = m;
  var url = 'https://hugdog.glitch.me/conversation?subject='+prompt+'&is=false';
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
        var parent = document.querySelectorAll('div')[1];
        var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
        parent.innerHTML+=inner;
        document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
        document.querySelector('input').value = '';
        hljs.highlightAll();
}).catch(error => console.error(error));
}
};
async function ress(m){
  is=false;
    var prompt = m;
  var url = 'https://hugdog.glitch.me/conversation?subject='+prompt+'&is=true';
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
        var parent = document.querySelectorAll('div')[1];
        var inner = '<div class="flex w-full mt-2 space-x-3 max-w-xs"><div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div><div><div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"><p class="text-sm">'+msg+'</p></div><span class="text-xs text-gray-500 leading-none">'+date+'</span></div></div>';
        parent.innerHTML+=inner;
        document.querySelector('.divw').scrollTop = document.querySelector('.divw').scrollHeight;
        document.querySelector('input').value = '';
        hljs.highlightAll();
}).catch(error => console.error(error));
}