const insert =  document.getElementById('insert')

window.addEventListener('keydown', function(e){
insert.innerHTML = `
<table>
  <tr>
    <th>Key</th>
    <th>Key code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ?'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
`
})