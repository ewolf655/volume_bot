import { PublicKey, Connection, Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

export const rayFee = new PublicKey('7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5');
export const tipAcct = new PublicKey('Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY');
export const RayLiqPoolv4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8');

export const connection = new Connection('https://api.devnet.solana.com', { // RPC URL HERE
  commitment: 'confirmed',
});

export const wallet = Keypair.fromSecretKey(
  bs58.decode(
    '2jtw6dA7QJBfRKGKqVPDLicVvSq1W2EHEgP5hfSzK6QMSdNgW1z3va5eYsg8cb2wRowjtJcVPha2hSaxLmtViPJH' // PRIV KEY OF SOL SENDER
  )
);

