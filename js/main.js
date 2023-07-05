function handleOnChangeInput () {
  const tableElement = document.getElementById('output-table')

  tableElement.removeChild(document.getElementById('generated-tbody'))
  generateTableBody()
}

function generateTableBody () {
  const tableElement = document.getElementById('output-table')
  const tableBody = document.createElement('tbody')
  tableBody.id = 'generated-tbody'

  const numbersInput = document.getElementById('numbers')
  let divisibleBy4Count = 0;
  numbersInput.value
    .split(',')
    .filter(n => !!n)
    .map((number) => {
      const squared = getSquaredValue(number)
      const isDivisibleBy4 = getIsDisvisibleBy4(squared);
      divisibleBy4Count += isDivisibleBy4 ? 1 : 0;
      tableBody.innerHTML += `<tr>
<td>${number}</td>
<td>${squared}</td>
<td>${isDivisibleBy4 ? 'Yes' : 'No'}</td>
</tr>`
    })
  tableBody.innerHTML += `<tr><td colspan='3'>Count of squared values divisible by 4: ${divisibleBy4Count}</td></tr>`

  tableElement.appendChild(tableBody)
}

function getSquaredValue (number) {
  return number * number
}

function getIsDisvisibleBy4 (number) {
  return number % 4 === 0;
}

generateTableBody()