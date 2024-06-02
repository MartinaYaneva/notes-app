import logoImg from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Notes" />
      <h1>Notes App</h1>
    </header>
  );
}