import Container from "react-bootstrap/Container"
import {Button, Stack} from "react-bootstrap"
import BudgetCard from "./BudgetCard"
import AddBudgetModal from "./AddBudget"
import { useState } from "react"
import { useBudgets  } from './BudgetsContext'

function App(){
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    const {budgets, getBudgetExpenses} = useBudgets()
     return ( 
    <>
    <Container>hello dadies hello daddies hehehhehe hello what's up helo whatsup
        
        <Stack 
        direction="horizontal" gap ="2" className="mb-4">
            <h1 className="me-auto">Monthly Budget</h1>
            <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
            <Button variant="outline-primary">Add Expense</Button>
            <Button variant="outline-dark">Weekly Budget</Button>
        </Stack>
            <div style={{display:"grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
                gap: "1rem", alignItems: "Flex"}}>
                    
                <BudgetCard name = "Makeup" desc = "" amount = {200} max = {500}></BudgetCard>
                <BudgetCard name = "Entertainment" desc = "" amount = {200} max = {400}></BudgetCard>
                <BudgetCard name = "Subscriptions" desc = "" amount = {0} max = {100}></BudgetCard>
                <BudgetCard name = "Utilities" desc = "" amount = {0} max = {0}></BudgetCard>
                <BudgetCard name = "Rent" desc = "" amount = {0} max = {0}></BudgetCard>
                <BudgetCard name = "Groceries" desc = "" amount = {300} max = {400}></BudgetCard>
                <BudgetCard name = "Clothes" desc = "" amount = {200} max = {1000}></BudgetCard>
                <BudgetCard name = "Miscellaneous" desc = "" amount = {0} max = {400}></BudgetCard>
                
                
{/*                 { budgets.map(budget => {
                    const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
                    return (
                        
                    <BudgetCard 
                        key = {budget.id}
                        name = {budget.name}
                        amount = {0}
                        max = {budget.max}  
                    ></BudgetCard>
                    )
                    }) }  */}
                    
            </div>
            
        </Container> 
        <AddBudgetModal show = {showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
        </>
    )
}


export default App