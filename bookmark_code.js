javascript:(function(){
  let payload = prompt("Enter the exact text/payload to find:");
  if(!payload) return;

  let foundElements = [];
  
  /* Deep Recursive Function to find payload in ALL nodes */
  function searchNodes(node) {
    /* 1. Check Text Nodes (Direct visible text) */
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.nodeValue.includes(payload)) {
        foundElements.push({
          type: 'TEXT',
          tag: node.parentElement.tagName,
          content: node.nodeValue,
          html: node.parentElement.outerHTML
        });
      }
    } 
    /* 2. Check Attributes (Hidden reflections in values/ids) */
    else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let attr of node.attributes) {
        if (attr.value.includes(payload)) {
          foundElements.push({
            type: 'ATTRIBUTE',
            tag: node.tagName,
            attrName: attr.name,
            content: attr.value,
            html: node.outerHTML
          });
        }
      }
    }
    
    /* 3. Continue searching in children */
    for (let child of node.childNodes) {
      searchNodes(child);
    }
  }

  searchNodes(document.body);

  if (foundElements.length === 0) {
    alert("Nahi mila bhai! Check karo kahin payload kisi iframe mein toh nahi?");
  } else {
    let report = window.open('', '_blank');
    report.document.write('<html><body style="background:#121212;color:#00ff00;font-family:monospace;padding:20px;">');
    report.document.write('<h2>Deep Scan: Reflection Found!</h2><hr>');
    
    foundElements.forEach((res, i) => {
      report.document.write(`<div style="border:1px solid #333;margin:10px;padding:10px;background:#1e1e1e">`);
      report.document.write(`<strong>[${i+1}] Type:</strong> ${res.type}<br>`);
      report.document.write(`<strong>Tag:</strong> &lt;${res.tag.toLowerCase()}&gt;<br>`);
      if(res.attrName) report.document.write(`<strong>Attribute:</strong> ${res.attrName}<br>`);
      report.document.write(`<strong>Content:</strong> <span style="color:yellow">${res.content.replace(/</g,'&lt;')}</span><br>`);
      report.document.write(`<strong>Full HTML:</strong> <pre style="color:#888;white-space:pre-wrap;">${res.html.replace(/</g,'&lt;')}</pre>`);
      report.document.write(`</div>`);
    });
    
    report.document.write('</body></html>');
    report.document.close();
  }
})();
