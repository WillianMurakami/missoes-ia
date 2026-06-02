# Missoes IA - deploy MVP

Este prototipo esta preparado para rodar de dois modos:

- Local demo: sem Supabase configurado, salva no navegador.
- Web real: com Supabase configurado, usa login, banco e storage.

## Decisao de login

Esta versao usa login leve por e-mail/identificador, sem senha e sem confirmacao de caixa de entrada.
O objetivo e reduzir friccao na acao: o colaborador digita um e-mail, entra e o progresso fica associado a esse identificador.

## Passos Supabase

1. Crie um projeto em https://supabase.com.
2. Abra SQL Editor e rode o arquivo `supabase-schema.sql` completo.
   Esse passo cria tabelas, policies, permissoes `GRANT` para a API publica e o bucket `mission-evidence`.
3. Se o login mostrar erro de banco, rode novamente o `supabase-schema.sql` completo.
4. Copie `Project URL` e a `publishable key` ou a legacy `anon public key`.
5. Preencha `supabase-config.js`:

```js
window.SUPABASE_CONFIG = {
  url: "https://SEU-PROJETO.supabase.co",
  anonKey: "SUA_PUBLISHABLE_OU_ANON_KEY",
  evidenceBucket: "mission-evidence",
  adminCode: "seu-codigo-admin",
};
```

## Passos Vercel

1. Crie um repositorio GitHub com estes arquivos ou use upload manual.
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
