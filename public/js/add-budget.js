const $addBudgetBtn = document.querySelector('#add-budget');
const $budgetForm = document.querySelector('#budget-form');
const $customBudgetList = document.querySelector('#custom-budget-list');

const handleAddBudget = event => {
    event.preventDefault();

    const budgetValue = document.querySelector('#new-budget').value;

    if (!budgetValue) {
        return false;
    }

 const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'budget';
  checkbox.value = budgetValue;
  checkbox.id = budgetValue
    .toLowerCase()
    .split(' ')
    .join('-');

  const label = document.createElement('label');
  label.textContent = budgetValue;
  label.htmlFor = budgetValue
    .toLowerCase()
    .split(' ')
    .join('-');

  const divWrapper = document.createElement('div');

  divWrapper.appendChild(checkbox);
  divWrapper.appendChild(label);
  $customToppingsList.appendChild(divWrapper);

  toppingValue.value = '';
};

const handleBudgetSubmit = event => {
  event.preventDefault();

  const budgetName = $budgetForm.querySelector('#budget-name').value;
  const createdBy = $budgetForm.querySelector('#created-by').value;
  const size = $budgetForm.querySelector('#budget-size').value;
  const budgetItems = [...$budgetForm.querySelectorAll('[name=budget]:checked')].map(budget => {
    return budget.value;
  });

  if (!budgetName || !createdBy || !budgetItems.length) {
    return;
  }

  const formData = { pizzaName, createdBy, size, toppings };

  fetch('/api/pizzas', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(postResponse => {
    alert('Pizza created successfully!');
    console.log(postResponse);
  })
  .catch(err => {
    console.log(err);
    saveRecord(formData);
  });
};

$pizzaForm.addEventListener('submit', handlePizzaSubmit);
$addToppingBtn.addEventListener('click', handleAddTopping);