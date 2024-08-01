import React from 'react'
import {Card, CardBody, CardTitle, ProgressBar, Stack, Button} from 'react-bootstrap'
import { currencyFormatter } from './utils'

// this is a custom component in which we make cards containing information
// that is directly displayed to the user


/*rfc for a default layout of react code*/

export default function BudgetCard({name, desc, amount, max}) {
  const classNames = []

  if(amount > max){
    classNames.push("bg-danger", "bg-opacity-10")
    desc = desc + " You've exceeded your limit ";
  }

  return (
    <Card className={classNames.join(" ")}>
      <CardBody>
        <CardTitle>
          <div>{name}</div>
          <div className='fs-6'>{desc}</div>
          <div><span className = "text-muted fs-6 ms-1">{currencyFormatter.format(amount)} / {currencyFormatter.format(max)} </span> </div>
        </CardTitle>
        <ProgressBar 
          className="rounded-pill" variant = {getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
        <Stack direction="horizontal" gap ="2" className="mt-4">
        <Button variant="outline-primary">Add Expense</Button>
        <Button href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" variant="outline-secondary">View Expense</Button>

        </Stack>
      </CardBody>
    </Card>
  )
}

function getProgressBarVariant(amount, max){
  const ratio = amount / max;
  if (ratio < .25) return "success";
  if (ratio < .50) return "info";
  if (ratio < .75) return "warning";
  return "danger";
}


