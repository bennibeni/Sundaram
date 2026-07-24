# Sundaram

Questa guida spiega come copiare (forkare o clonare) questa app Next.js su GitHub e deployarla su Vercel usando le tue impostazioni personali.

## 1. Copia il repository su GitHub

### Opzione 1: Fork

1. Vai su <https://github.com/bennibeni/Sundaram>
2. Clicca su "Fork" in alto a destra per creare una copia nel tuo account GitHub.

### Opzione 2: Clone e nuovo repository

1. Clona il repository:

   ```sh
   git clone https://github.com/bennibeni/Sundaram.git
   ```

2. Crea un nuovo repository sul tuo account GitHub.
3. Imposta il nuovo remote:

   ```sh
   cd Sundaram
   git remote set-url origin https://github.com/TUO-USERNAME/TUO-REPO.git
   git push -u origin main
   ```

## 2. Deploy su Vercel

1. Vai su <https://vercel.com> e accedi con GitHub.
2. Clicca su "New Project" e importa il repository dal tuo account GitHub.
3. Segui i passaggi guidati (Vercel rileva Next.js automaticamente).
4. Clicca "Deploy".
5. Al termine, Vercel ti fornirà un URL pubblico per la tua app (esempio: <https://sundaram-h7e2q9ex1-bennibenis-projects.vercel.app/>).

## 3. Personalizza le impostazioni

- Puoi aggiungere variabili d’ambiente o domini personalizzati dalla dashboard Vercel.
- Per condividere la tua app, usa l’URL fornito da Vercel (es: <https://sundaram-h7e2q9ex1-bennibenis-projects.vercel.app/>).

---

**Nota:** Se hai bisogno di aiuto per configurare Git o Vercel, consulta la documentazione ufficiale o chiedi supporto.
