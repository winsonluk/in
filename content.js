var body = [...document.body.getElementsByTagName('*')];

function replace(){
  body.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        domReplace(child, 'in', '[in]');
        domReplace(child, 'In', '[In]');
      }
    });

  });
}

function domReplace(node, original, replacement) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(original, replacement);
  }
  if ((node = node.firstChild)) {
    do {
      domReplace(node, original, replacement);
    } while ((node = node.nextSibling));
  }
}

window.onload = replace();
