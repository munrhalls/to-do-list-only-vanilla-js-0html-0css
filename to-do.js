function append(element) {
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(element);
}
function createListInterface() {
  var interface = document.createElement('div');
  interface.style.display = 'flex';

  function createTextField() {
    var textField = document.createElement('input');
    textField.style.type = 'text';
    textField.style.width = '45%';
    textField.style.height = '1.5rem';
    textField.style.border = '3px solid #000';
    textField.style.borderRadius = '0.5rem';
    textField.style.textDecoration = 'none';
    textField.style.padding = '0.25rem 0.5rem';
    textField.style.fontSize = '1rem';
    interface.appendChild(textField);
  }
  // in congruence with domino flow
  function createAddBtn() {
    var addBtn = document.createElement('div');
    let sign = document.createElement('div');
    sign.innerText = '+';
    sign.style.fontSize = '1rem';
    sign.style.fontWeight = 'bold';
    sign.style.margin = '0.25rem';
    sign.style.color = 'green';
    addBtn.appendChild(sign);
    addBtn.style.textAlign = 'center';
    addBtn.style.width = '1.5rem';
    addBtn.style.height = '1.5rem';
    addBtn.style.border = '6px solid #020202';
    addBtn.style.borderRadius = '0.5rem';
    addBtn.style.textDecoration = 'none';
    addBtn.style.backgroundColor = 'black';
    addBtn.onclick = function(e) {
      var text = document.getElementsByTagName('input')[0].value;
      var li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.width = '50%'; 
      var textNode = document.createTextNode(text);
      var p = document.createElement('span');
      p.appendChild(textNode);
      var delBtn = document.createElement('div');
      delBtn.style.backgroundColor = 'black';
      delBtn.style.width = '1.5rem';
      delBtn.style.height = '1.5rem';
      delBtn.style.textAlign = 'center';
      var sign = document.createElement('span');
      sign.style.color = 'darkred';
      var textNode = document.createTextNode('x');
      sign.appendChild(textNode);
      delBtn.appendChild(sign);
      delBtn.onclick = function(e) {
        var elClicked = e.target.parentNode.tagName;
        elClicked === 'LI' ? e.target.parentNode.remove() : e.target.parentNode.parentNode.remove();

      };
      li.appendChild(p);
      li.appendChild(delBtn);
      var list = document.getElementsByTagName('ul')[0];
      list.appendChild(li);
    }
    interface.appendChild(addBtn);
  }
  createTextField();
  createAddBtn();
  append(interface);
}

function createList() {
  var list = document.createElement('ul');
  append(list);
}
function createItem() {
  var item = document.createElement('li');
  var input = document.getElementsByTagName('input')[0];
  var textNode = document.createTextNode(input.value);
  var span = document.createElement('span');
  var delBtn = createDelBtn();

  span.appendChild(textNode);
  item.appendChild(span);
  item.appendChild(delBtn)
}

function createDelBtn() {
  var delBtn = document.createElement('span');
  delBtn.innerText = 'x';

  delBtn.onclick = function(e) {
    console.log('x')
  }
  return delBtn;
}

window.addEventListener('keydown', function(e) { 
  if (e.code == 'Enter') {
    createItem();
  }
});

function aggregate() {
  createListInterface();
  createList();
}
window.onload = function() {
  aggregate();
};