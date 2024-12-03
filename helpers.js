import * as quotes from "./quotes.json";

export function getQuotePerson() {
  const index = Math.round(Math.random() * quotes.quotes.length);
  return quotes.quotes[index];
}
