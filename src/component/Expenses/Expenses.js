import React from 'react';

//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from '../NewExpense/ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020')
  const filterChangeHandler =(selectedYear)=>
  {
    setFilteredYear(selectedYear)
  }
  const filteredExpense = props.items.filter(
    expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
    }
  );

 
  return (
    <div>
      
    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter ={filterChangeHandler}/>
    <ExpensesChart expenses = {filteredExpense}/>
   <ExpensesList items ={filteredExpense}/>
    </Card>
    </div>
  );
  
}

export default Expenses;
