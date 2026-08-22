import { useMemo, useState } from "react";
import "./SequenceSundaram.css";

function sundaramSieve(limit) {
  if (limit < 2) {
    return {
      cells: [],
      marks: [],
      primes: new Set(),
    };
  }

  const n = Math.floor((limit - 2) / 2);
  const marked = Array(n + 1).fill(false);
  const marks = [];

  for (let i = 1; i <= n; i += 1) {
    for (let j = i; i + j + 2 * i * j <= n; j += 1) {
      const index = i + j + 2 * i * j;
      marked[index] = true;
      marks.push({ i, j, index, odd: 2 * index + 1 });
    }
  }

  const primes = new Set([2]);
  const cells = [];

  for (let i = 1; i <= n; i += 1) {
    const odd = 2 * i + 1;

    if (!marked[i]) {
      primes.add(odd);
    }

    cells.push({
      index: i,
      odd,
      marked: marked[i],
      prime: !marked[i],
    });
  }

  return { cells, marks, primes };
}

function buildSequence(limit) {
  const sieve = sundaramSieve(3 * limit + 1);
  const result = [];

  for (let m = 1; m <= limit; m += 1) {
    const candidate = m % 2 === 0 ? 3 * m + 1 : (3 * m + 1) / 2;

    if (sieve.primes.has(candidate)) {
      result.push({
        m,
        candidate,
        rule: m % 2 === 0 ? "3m + 1" : "(3m + 1) / 2",
      });
    }
  }

  return { ...sieve, sequence: result };
}

export default function SequenceSundaram() {
  const [limit, setLimit] = useState(136);

  const data = useMemo(() => {
    return buildSequence(limit);
  }, [limit]);

  const primes = data.cells.filter((cell) => cell.prime);
  const maxPrimeTested = 3 * limit + 1;

  return (
    <main>
      <section className="sundaram-app">
        <header className="sundaram-hero">
          <div>
            <p className="eyebrow">Crivello di Sundaram</p>
            <h2>Dal reticolo degli indici alla tua sequenza</h2>
            <p>
              Sundaram elimina gli indici della forma <code>i + j + 2ij</code>.
              Gli indici rimasti producono primi dispari con <code>2k + 1</code>
              , poi quei primi selezionano i valori di <code>m</code>.
            </p>
          </div>

          <div className="stats-strip" aria-label="Statistiche">
            <span>
              <strong>{limit}</strong>
              limite N
            </span>
            <span>
              <strong>{maxPrimeTested}</strong>
              massimo testato
            </span>
            <span>
              <strong>{data.sequence.length}</strong>
              termini
            </span>
          </div>
        </header>

        <div className="control-row">
          <label className="field">
            <span>Limite N</span>
            <input
              min="1"
              type="number"
              value={limit}
              onChange={(event) => {
                const value = Number(event.target.value);
                setLimit(
                  Number.isFinite(value) && value > 0 ? Math.floor(value) : 1,
                );
              }}
            />
          </label>

          <div className="limit-note">
            <strong>{data.cells.length}</strong> indici nel crivello,{" "}
            <strong>{primes.length}</strong> primi dispari ottenuti
          </div>
        </div>

        <div className="process-grid">
          <article className="panel sieve-panel">
            <div className="panel-heading">
              <span className="step">1</span>
              <div>
                <h3>Eliminazione</h3>
                <p>
                  Ogni cella rappresenta un indice k. Quelle rosse sono
                  eliminate.
                </p>
              </div>
            </div>

            <div
              className="sieve-scroll"
              aria-label="Celle del crivello di Sundaram"
            >
              <div className="sieve-grid">
                {data.cells.map((cell) => (
                  <span
                    className={`sieve-cell ${cell.marked ? "is-marked" : "is-prime"}`}
                    key={cell.index}
                    title={`k=${cell.index}, 2k+1=${cell.odd}`}
                  >
                    <small>{cell.index}</small>
                    {cell.odd}
                  </span>
                ))}
              </div>
            </div>

            <div className="legend">
              <span>
                <i className="legend-dot prime-dot" />
                sopravvive
              </span>
              <span>
                <i className="legend-dot marked-dot" />
                eliminata
              </span>
            </div>
          </article>

          <article className="panel">
            <div className="panel-heading">
              <span className="step">2</span>
              <div>
                <h3>Primi ottenuti</h3>
                <p>Gli indici non eliminati diventano numeri primi dispari.</p>
              </div>
            </div>

            <div className="prime-list">
              {primes.map((cell) => (
                <span key={cell.index}>{cell.odd}</span>
              ))}
            </div>
          </article>

          <article className="panel sequence-panel">
            <div className="panel-heading">
              <span className="step">3</span>
              <div>
                <h3>Sequenza finale</h3>
                <p>
                  Per ogni m si controlla il candidato prodotto dalla regola
                  giusta.
                </p>
              </div>
            </div>

            <div className="sequence-grid">
              {data.sequence.map((item) => (
                <span key={item.m} title={`${item.rule} = ${item.candidate}`}>
                  {item.m}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>
      <footer className="projects-footer">
        <a href="https://links-page-bennibeni.vercel.app/">← All projects</a>
      </footer>
    </main>
  );
}
