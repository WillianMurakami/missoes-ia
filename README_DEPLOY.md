# Missoes IA - deploy MVP

Este prototipo esta preparado para rodar de dois modos:

- Local demo: sem Supabase configurado, salva no navegador.
- Web real: com Supabase configurado, usa login, banco e storage.

## Decisao de login

Esta versao usa login leve por e-mail/identificador, sem senha e sem confirmacao de caixa de entrada.
O objetivo e reduzir friccao na acao: o colaborador digita um e-mail, entra e o progresso fica associado a esse identificador.

## Passos Supabase

1. Crie um projeto em https://supabase.com.
2. Abra SQL Editor e rode `supabase-schema.sql`.
3. Em Storage, crie um bucket chamado `mission-evidence`.
   Para o piloto mais simples, marque como publico. Se quiser privado, precisaremos ajustar o app para gerar links assinados.
4. Copie `Project URL` e `anon public key`.
5. Preencha `supabase-config.js`:

```js
window.SUPABASE_CONFIG = {
  url: "https://SEU-PROJETO.supabase.co",
  anonKey: "SUA_ANON_KEY",
  evidenceBucket: "mission-evidence",
};
```

## Passos Vercel

1. Crie um repositório GitHub com estes arquivos ou use upload manual.
2. Publique como projeto estatico na Vercel.
3. Framework preset: Other.
4. Build command: vazio.
5. Output directory: `.`.

## Arquivos importantes

- `index.html`: interface.
- `styles.css`: visual.
- `app.js`: regras da aplicacao.
- `supabase-config.js`: credenciais publicas do Supabase.
- `supabase-schema.sql`: estrutura de banco.
