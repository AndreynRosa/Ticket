import React, { useState, useCallback, useEffect } from 'react';

import Header from '../../components/Header';
import { Paper, Button, Grid } from '@material-ui/core';
import { useStyles } from './styles';
import {
  newTicket,
  findAllTickets,
  callTicket,
  resetQueque,
} from '../../service/TicketService';
export default function Home() {
  const [generatedTicket, setGeneratedTicket] = useState(undefined);
  const [calledTickets, setCalledTickets] = useState([]);

  const [nextTicket, setNextTicket] = useState({
    formatedNumber: undefined,
    id: undefined,
  });
  const [generalTicket, setGeneralTicket] = useState([]);
  const [priorTicket, setPriorTicket] = useState([]);

  const loadData = useCallback(async () => {
    const loadedData = await findAllTickets();
    await loading(loadedData);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  async function loading(loadedData) {
    if (loadedData.data) {
      const indexLestItem =
        loadedData.data.length > 0
          ? loadedData.data.length - 1
          : loadedData.data.length;
      const generated = loadedData.data[indexLestItem];
      const generals = loadedData.data.filter(s => {
        return s.type === 'N' && !s.status;
      });
      const priorities = loadedData.data.filter(s => {
        return s.type === 'P' && !s.status;
      });
      const calleds = loadedData.data.filter(s => {
        return s.status;
      });
      const proximaSenha = priorities[0] ? priorities[0] : generals[0];
      if (proximaSenha && proximaSenha.id) {
        setNextTicket({
          formatedNumber: formaterNumberTicket(proximaSenha),
          id: `${proximaSenha?.id}`,
        });
      }
      if (generated?.id) {
        setGeneratedTicket(formaterNumberTicket(generated));
      }
      setCalledTickets(calleds);
      setGeneralTicket(generals);
      setPriorTicket(priorities);

      if (generals.length > 0) {
        setNextTicket({
          formatedNumber: formaterNumberTicket(generals[0]),
          id: `${generals[0]?.id}`,
        });
      }

      if (priorities.length > 0) {
        setNextTicket({
          formatedNumber: formaterNumberTicket(priorities[0]),
          id: `${priorities[0]?.id}`,
        });
      }
    }
  }

  async function next() {
    if (nextTicket) {
      await callTicket(nextTicket.id);
      loadData();
    }
  }
  const classes = useStyles();
  return (
    <>
      <Header>
        <h1>Home</h1>

        <Paper style={{ padding: '25px', marginBottom: '15px' }}>
          <h2>Selecione uma senha</h2>

          <Grid container spacing={3}>
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  await onNextSenha('N');
                }}
              >
                SENHA NORMAL
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  await onNextSenha('P');
                }}
              >
                SENHA PREFERENCIAL
              </Button>
              <Paper
                elevation={3}
                style={{
                  marginLeft: '30%',
                  marginTop: '-20px',
                  height: '80px',
                }}
              >
                <h5>Senha gerada:</h5>
                {generatedTicket && generatedTicket !== ' '
                  ? generatedTicket
                  : 'Não gerada'}
              </Paper>
            </div>
          </Grid>
        </Paper>

        <Paper style={{ padding: '25px', marginBottom: '15px' }}>
          <h2>Chame uma nova senha</h2>

          <Grid container spacing={3}>
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  await next();

                  loadData();
                }}
              >
                CHAMAR PROXIMA
              </Button>

              <Paper
                elevation={3}
                style={{
                  marginLeft: '30%',
                  marginTop: '-20px',
                  height: '80px',
                }}
              >
                <h5>Proxima senha</h5>
                {nextTicket.formatedNumber
                  ? nextTicket.formatedNumber
                  : 'Sem senha'}
              </Paper>
            </div>
          </Grid>
        </Paper>
        <Paper style={{ padding: '25px', marginBottom: '15px' }}>
          <h2>Painel</h2>

          <Grid container spacing={3}>
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  await resetQueque();
                  window.location.reload();
                  loadData();
                }}
              >
                RESETAR
              </Button>
            </div>
            <Grid xs={4}>
              <Paper>
                <h3>Proximas Senhas Normais</h3>
                {generalTicket.map(item => {
                  return <p>{formaterNumberTicket(item)}</p>;
                })}
              </Paper>
            </Grid>
            <Grid xs={4}>
              <Paper>
                <h3>Senhas preferencias</h3>
                {priorTicket.map(item => {
                  return <p>{formaterNumberTicket(item)}</p>;
                })}
              </Paper>
            </Grid>
            <Grid xs={4}>
              <Paper>
                <h3>Senhas Chamadas</h3>
                {calledTickets.map(item => {
                  return <p>{formaterNumberTicket(item)}</p>;
                })}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Header>
    </>
  );

  async function onNextSenha(type) {
    const resp = await newTicket(type);
    if (resp.data) {
      const all = await findAllTickets();

      loading(all);
    }
  }
}
function formaterNumberTicket(nextTicket) {
  return `${nextTicket?.type}-${fromatNum(nextTicket?.number)}`;
}
function fromatNum(nextTicketNumber) {
  return ('000' + nextTicketNumber).slice(-3);
}
