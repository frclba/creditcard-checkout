import axios from 'axios'

import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import NativeSelect from '@material-ui/core/NativeSelect'
import FormControl from '@material-ui/core/FormControl'

import styles from '../assets/paymentForm.module.scss'

export const PaymentForm = (): JSX.Element => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const steps = ['Carrinho', 'Pagamento', 'Confirmação']

  const [activeStep] = React.useState(1)

  return (
    <main className={styles.layout}>
      {/* <Paper className={styles.paper}> */}
      <Stepper activeStep={activeStep} className={styles.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  id="standard-required"
                  label="Número do Cartão"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  id="standard-basic"
                  label="Nome (igual ao cartão)"
                  fullWidth
                  autoComplete="cc-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="expDate"
                  label="Validade"
                  fullWidth
                  autoComplete="cc-exp"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cvv"
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  autoComplete="cc-csc"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={12}
                    inputProps={{
                      name: 'parcelas',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={12}>12 x R$1.000,00 sem juros</option>
                    <option value={6}>6 x R$2.000,00 sem juros</option>
                    <option value={3}>3 x R$4.000,00 sem juros</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </React.Fragment>

          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={async () => {
                const data = await fetcher('/api/pagar')
                alert(`data: ${data.message}`)
              }}
            >
              Test Button
            </Button>
          </div>
        </React.Fragment>
      </React.Fragment>
      {/* </Paper> */}
    </main>
  )
}

export default PaymentForm
