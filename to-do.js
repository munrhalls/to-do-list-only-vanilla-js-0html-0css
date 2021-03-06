function append(element) {
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(element);
}
function dominoTitle() {
  var title = document.createElement('div');
  var text = document.createTextNode('TO-DO LIST');
  title.appendChild(text);
  title.style.fontSize = '4rem';
  title.style.paddingBottom = '2rem';
  append(title)
}
function dominoListInterface() {
  var interface = document.createElement('div');
  interface.style.display = 'flex';

  function dominoTextField() {
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
  function dominoAddBtn() {
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
    addBtn.style.marginLeft= '0.75rem';
    addBtn.style.border = '6px solid #020202';
    addBtn.style.borderRadius = '0.5rem';
    addBtn.style.textDecoration = 'none';
    addBtn.style.backgroundColor = 'black';
    addBtn.style.cursor = 'pointer';
    addBtn.onclick = function(e) {
      dominoAddItem();
      }
    interface.appendChild(addBtn);
  }
  dominoTextField();
  dominoAddBtn();
  append(interface);
}

function dominoList() {
  var list = document.createElement('ul');
  list.style.paddingLeft = '0.75rem';
  append(list);
}
function dominoAddItem() {
  var text = document.getElementsByTagName('input')[0].value;
      var item = document.createElement('li');
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      item.style.width = '50%';
      item.style.paddingTop = '1rem';
      item.style.fontSize = '1.25rem';
      item.style.fontWeight = 'bold';

      var textNode = document.createTextNode(text);
      var p = document.createElement('span');
      p.appendChild(textNode);
      function dominoCheckBtn() {
        var checkBtn = document.createElement('div');

        var checked = document.createElement('div');
        checked.id = "checked";
        checked.style.position = 'relative';
        checked.style.backgroundColor = 'white';
        checked.style.border = '3px solid black';
        checked.style.borderRadius = '0.5rem';
        checked.style.width = '1.5rem';
        checked.style.height = '1.5rem';
        checked.style.textAlign = 'center';
        checked.style.marginRight = '1.5rem';
        checked.style.cursor = 'pointer';
        var sign = document.createElement('span');
        sign.style.color = 'green';
        sign.style.fontWeight = 'bold';
        sign.style.fontSize =   '2.25rem';
        sign.style.position = 'absolute';
        sign.style.left = 'calc(50% - 0.75rem)'
        sign.style.top= '-1rem';
        var textNode = document.createTextNode('✓');
        sign.appendChild(textNode);
        checked.appendChild(sign);

        var unchecked = document.createElement('div');
        unchecked.id = "unchecked";
        unchecked.style.backgroundColor = 'white';
        unchecked.style.border = '3px solid black';
        unchecked.style.borderRadius = '0.5rem';
        unchecked.style.width = '1.5rem';
        unchecked.style.height = '1.5rem';
        unchecked.style.textAlign = 'center';
        unchecked.style.marginRight = '1.5rem';
        unchecked.style.cursor = 'pointer';

        var sign = document.createElement('span');
        sign.style.color = 'white';
        sign.style.fontWeight = 'bold';
        var textNode = document.createTextNode('▢');
        sign.appendChild(textNode);
        unchecked.appendChild(sign);

        checkBtn.appendChild(unchecked);

        checkBtn.onclick = function(e) {
          if (this.children[0].id === 'unchecked') {
            this.removeChild(unchecked);
            this.appendChild(checked);
          } else {
            this.removeChild(checked);
            this.appendChild(unchecked);
          }
        };
        return checkBtn;
      }
      function dominoDelBtn() {
        var delBtn = document.createElement('div');
        delBtn.style.backgroundColor = 'black';
        delBtn.style.width = '2rem';
        delBtn.style.height = '1.5rem';
        delBtn.style.textAlign = 'center';
        delBtn.style.paddingBottom= '0.5rem';
        delBtn.style.cursor = 'pointer';
        var sign = document.createElement('span');
        sign.style.color = 'darkred';
        sign.style.fontSize = '1.5rem';
        var textNode = document.createTextNode('x');
        sign.appendChild(textNode);
        delBtn.appendChild(sign);
        delBtn.onclick = function(e) {
          var elClicked = e.currentTarget .parentNode.tagName;
          elClicked === 'LI' ? e.currentTarget .parentNode.remove() : e.currentTarget .parentNode.parentNode.remove();
        };
        return delBtn;
      }
      var checkBtn = dominoCheckBtn();
      var delBtn = dominoDelBtn();
      var btns = document.createElement('div');
      btns.style.display = 'flex';
      btns.appendChild(checkBtn);
      btns.appendChild(delBtn);
      item.appendChild(p);
      item.appendChild(btns);
      var list = document.getElementsByTagName('ul')[0];
      list.appendChild(item);
    
}

window.addEventListener('keydown', function(e) { 
  if (e.code == 'Enter') {
    dominoAddItem();
  }
});

function aggregate() {
  dominoTitle();
  dominoListInterface();
  dominoList();
}
window.onload = function() {
  aggregate();
};