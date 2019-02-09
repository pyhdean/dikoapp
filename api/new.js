import Settings from '../env.config';

export function getNews() {
  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/`+
      `${Settings.NewsSheetId}/values/A1:B30?key=${Settings.GoogleAPIKey}`,
    { method: 'GET' }
  ).then((res)=>res)
}