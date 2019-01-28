export default function getLang(By, Eng, Ru) {
  const lang = localStorage.getItem('lang');
  let poetData = 0;

  if (lang === 'by') {
    poetData = By;
  } else if (lang === 'eng') {
    poetData = Eng;
  } else {
    poetData = Ru;
  }
  return poetData;
}
